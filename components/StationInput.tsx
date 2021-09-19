import React, { useState, useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Chip, IconButton, Surface, useTheme } from 'react-native-paper';
import color from 'color';
import StationAutocomplete from './StationAutocomplete';
import { IStation, searchStations } from '../lib/stations';

interface IStationInputProps {
  onChange: (station?: IStation) => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    borderRadius: 50
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 8,
    alignSelf: 'stretch',
    minWidth: 0,
  },
});

const StationInput = (props: IStationInputProps) => {
  const [text, setText] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [autocompleteText, setAutocompleteText] = useState('');
  const [selected, setSelected] = useState<IStation>();
  const [debounce, setDebounce] = useState<NodeJS.Timeout>();
  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();

  const { colors, dark, fonts } = theme;
  const textColor = colors.text;
  const font = fonts.regular;
  const iconColor = dark ? textColor : color(textColor).alpha(0.54).rgb().string();
  const rippleColor = color(textColor).alpha(0.32).rgb().string();

  const onChangeText = async (input: string) => {
    setText(input);

    if (input.length < 3) {
      setShowAutocomplete(false);
      setAutocompleteText('');
    }

    if (debounce) {
      clearTimeout(debounce);
    }

    // wait 200ms before searching
    await new Promise(resolve => {
      setDebounce(setTimeout(resolve, 200))
    });

    if (input.length >= 3) {
      setAutocompleteText(input);
      setShowAutocomplete(true);
    }
  }

  const onItemSelected = (station?: IStation) => {
    setText('');
    setSelected(station);
    setShowAutocomplete(false);
    props.onChange(station);
  }

  const reset = () => {
    setText('');
    setSelected(undefined);
    setShowAutocomplete(false);
    props.onChange(undefined);
  }

  const submit = async () => {
    const stations = await searchStations(text);
    if (stations.length > 0) {
      onItemSelected(stations[0]);
    }
  }

  const placeholder = selected ? '' : 'Search for a station';

  const containerStyle = StyleSheet.flatten([
    styles.container,
    {
      backgroundColor: theme.colors.surface
    }
  ]);

  return (
    <>
      <Surface style={containerStyle}>
        <IconButton
          icon="magnify"
          borderless
          color={iconColor}
          rippleColor={rippleColor}
        />
        { !!selected ? (
          <Chip icon="train" style={{ backgroundColor: color(theme.colors.surface).lighten(0.5).hex() }} onPress={reset}>{selected.name}</Chip>
        ) : null }
        <TextInput
          style={[styles.input, { color: textColor, ...font }]}
          placeholder={placeholder}
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={submit}
          editable={!selected}
          focusable={!selected}
          ref={inputRef}
          placeholderTextColor={colors.placeholder}
          selectionColor={colors.primary}
          underlineColorAndroid="transparent"
          returnKeyType="search"
          keyboardAppearance={dark ? 'dark' : 'light'}
          accessibilityRole="search"
        />
        { !!selected ? (
          <IconButton
            icon="close"
            onPress={reset}
            borderless
            color={iconColor}
            rippleColor={rippleColor}
          />
        ) : null }
      </Surface>
      { !selected && showAutocomplete ? <StationAutocomplete input={autocompleteText} onChange={onItemSelected} /> : null }
    </>
  )
}

export default StationInput;