import 'react-native-gesture-handler';
import React, { Fragment, useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider, connect } from 'react-redux';

import store from 'store';
import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import AddScreen from 'screens/AddScreen';
import updateTime from 'actions/updateTime';

const Stack = createStackNavigator();

const App = ({ updateTime }) => {
  useEffect(() => {
    const intervalId = setInterval(
      () => updateTime(new Date()),
      1000,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        headerMode='float'
      >
        <Stack.Screen
          name='Home'
          component={ HomeScreen }
          options={{
            /*headerStyle: {
              backgroundColor: '#a41c56',
            },*/
            header: props => <Header { ...props } />,
          }}
        />
        <Stack.Screen
          name='Add'
          component={ AddScreen }
          options={{
            /*headerStyle: {
              backgroundColor: '#a41c56',
            },*/
            header: props => <Header { ...props } />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ConnectedApp = connect(
  null,
  { updateTime },
)(App);

const StoreWrappedApp = ({ children }) => (
  <StoreProvider store={ store }>
    <ConnectedApp />
  </StoreProvider>
);

export default StoreWrappedApp;
