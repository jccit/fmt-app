import ReactNative from 'react-native';
import color from 'color';
const { MaterialYouModule } = ReactNative.NativeModules;

export async function getColours() {
  try {
    return await MaterialYouModule.getColours();
  } catch (e) {
    return null;
  }
}

export async function computeTheme(defaultTheme: any, darkTheme: any, colours: any) {
  if (colours == null) {
    return {light: defaultTheme, dark: darkTheme};
  }
  const light = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: colours.accent1[4],
      accent: colours.accent2[7],
      background: color(colours.neutral2[0]).mix(color(colours.neutral2[1])).hex(),
      surface: colours.neutral2[2],
      text: colours.accent1[11],
      onSuface: colours.accent1[11]
    }
  };

  const dark = {
    ...darkTheme,
    colors: {
      ...darkTheme.colors,
      primary: colours.accent1[7],
      accent: colours.accent2[7],
      background: colours.neutral1[11],
      surface: color(colours.accent1[10]).lighten(0.1).hex(),
      text: colours.accent1[1],
      onSuface: colours.accent1[1]
    }
  };

  const out = { light, dark };
  console.log(out);

  return out;
}
