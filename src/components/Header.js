import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Header as NativeBaseHeader,
  Left,
  Button,
  Icon,
  Body,
  Text,
} from 'native-base';

import theme from 'theme';

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.main.background,
  },
  text: {
    color: theme.color.main.text,
  },
});

const Header = ({ previous, navigation: { goBack } }) => (
  <NativeBaseHeader
    style={ styles.root }
    androidStatusBarColor={ theme.color.main.androidStatusBar }
  >
    <Left>
      { previous ? (
        <Button transparent onPress={ goBack }>
          <Icon name='arrow-back' />
        </Button>
      ) : null }
    </Left>
    <Body>
      <Text style={ styles.text }>App Name</Text>
    </Body>
  </NativeBaseHeader>
);

export default Header;
