import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';

import theme from 'theme';
import { addEvent } from 'actions/events'

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: theme.color.main.background,
    color: theme.color.main.text,
  },
});

const ButtonAdd = ({ navigation: { navigate }, title, dateObj, addEvent }) => (
  <Button
    block
    style={ styles.button }
    onPress={ () => addEvent({ title, dateObj, navigate }) }
  >
    <Text>Add</Text>
  </Button>
);

const mapState = state => {
  const { newEventTitle: title } = state.textInputs;
  const { years, yearPosition, month, day, hour, minute, second } = state.datePickers;
  const dateObj = { year: years[yearPosition], month, day, hour, minute, second };
  return { title, dateObj };
};

export default connect(
  mapState,
  { addEvent },
)(ButtonAdd);
