import React from 'react';
import {
  Header as NativeBaseHeader,
  Left,
  Button,
  Icon,
  Body,
  Text,
} from 'native-base';

const Header = ({ previous, navigation: { goBack } }) => (
  <NativeBaseHeader>
    <Left>
      { previous ? (
        <Button transparent onPress={ goBack }>
          <Icon name='arrow-back' />
        </Button>
      ) : null }
    </Left>
    <Body>
      <Text>App Name</Text>
    </Body>
  </NativeBaseHeader>
);

export default Header;
