import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';

import { addEvent } from 'actions/event';

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    marginRight: 20,
  },
});

const ButtonAdd = ({ title, years, yearPosition, month, day, hour, minute, second, addEvent }) => (
  <Button
    block
    style={ styles.button }
    onPress={ () => addEvent({
      title,
      year: years[yearPosition], month, day,
      hour, minute, second
    }) }
  >
    <Text>Add</Text>
  </Button>
);

const mapState = state => {
  const { newEventTitle: title } = state.textInputs;
  const { years, yearPosition, month, day, hour, minute, second } = state.datePickers;
  return { title, years, yearPosition, month, day, hour, minute, second };
};

export default connect(
  mapState,
  { addEvent },
)(ButtonAdd);
