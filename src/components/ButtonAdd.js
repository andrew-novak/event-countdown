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

const ButtonAdd = ({ navigation: { navigate }, event, events, addEvent }) => (
  <Button
    block
    style={ styles.button }
    onPress={ () => addEvent({ event, events, navigate }) }
  >
    <Text>Add</Text>
  </Button>
);

const mapState = state => {
  const { newEventTitle: title } = state.textInputs;
  const { years, yearPosition, month, day, hour, minute, second } = state.datePickers;
  const date = new Date(years[yearPosition], month - 1, day, hour, minute, second)
  const { events } = state;
  return { event: { title, date }, events };
};

export default connect(
  mapState,
  { addEvent },
)(ButtonAdd);
