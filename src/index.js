import 'react-native-gesture-handler';
import React, { Fragment, useEffect } from 'react';
import { Root } from 'native-base';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider, connect } from 'react-redux';

import { STORAGE_KEY_EVENTS } from 'constants/storage'
import store from 'store';
import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import AddScreen from 'screens/AddScreen';
import { getLocal, storeLocal } from 'storage';
import updateTime from 'actions/updateTime';
import { setEvents } from 'actions/events';

const Stack = createStackNavigator();

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ events, setEvents, updateTime }) => {
  useEffect(() => {
    const intervalId = setInterval(
      () => updateTime(new Date()),
      1000,
    );
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getLocal(STORAGE_KEY_EVENTS)
      .then(stored => {
        if (stored) {
          setEvents(stored)
        }
      });
  }, []);

  useEffect(() => {
    storeLocal({ key: STORAGE_KEY_EVENTS, value: events });
  }, [events]);

  return (
    <Root>
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
    </Root>
  );
}

const mapState = state => {
  const { events } = state;
  return { events };
};

const ConnectedApp = connect(
  mapState,
  { setEvents, updateTime },
)(App);

const StoreWrappedApp = ({ children }) => (
  <StoreProvider store={ store }>
    <ConnectedApp />
  </StoreProvider>
);

export default StoreWrappedApp;
