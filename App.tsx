import React, { useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Departures from './pages/Departures';
import CustomNavigationBar from './components/CustomNavigationBar';
import merge from 'deepmerge';
import { PreferencesContext } from './PreferencesContext';
import Service from './pages/Service';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import { computeTheme, getColours } from './lib/colours';

const client = new ApolloClient({
  uri: 'https://fmt-graphql.fly.dev',
  cache: new InMemoryCache(),
});

const prefix = Linking.createURL('/');

let CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
let CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const isThemeDark = colorScheme === 'dark';
  const [colours, setColours] = useState(null);
  const [theme, setTheme] = useState(isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme);

  useEffect(() => {
    getColours().then(setColours);
  }, [isThemeDark]);

  useEffect(() => {
    computeTheme(CombinedDefaultTheme, CombinedDarkTheme, colours).then((themes: any) => {
      setTheme(isThemeDark ? themes.dark : themes.light);
    });
  }, [isThemeDark, colours]);

  const preferences = useMemo(
    () => ({
      isThemeDark,
    }),
    [isThemeDark]
  );

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Departures: '',
        Service: 'service/:id'
      }
    }
  }

  return (
    <PreferencesContext.Provider value={preferences}>
      <ApolloProvider client={client}>
        <PaperProvider theme={theme}>
          <NavigationContainer linking={linking} theme={theme}>
            <StatusBar style={isThemeDark ? 'light' : 'dark'} />
            <Stack.Navigator
              initialRouteName="Departures"
              screenOptions={{
                header: (props: NativeStackHeaderProps) => <CustomNavigationBar {...props} />,
              }}
            >
              <Stack.Screen name="Departures" component={Departures} />
              <Stack.Screen name="Service" component={Service} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ApolloProvider>
    </PreferencesContext.Provider>
  );
}
