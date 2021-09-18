import React from 'react';
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

const client = new ApolloClient({
  uri: 'https://fmt-graphql.fly.dev',
  cache: new InMemoryCache(),
});

const prefix = Linking.createURL('/');

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const isThemeDark = colorScheme === 'dark';

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const preferences = React.useMemo(
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
            <StatusBar style="light" />
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
