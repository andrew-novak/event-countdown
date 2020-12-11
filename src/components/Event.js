import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, CardItem, Button, Icon, Body, ListItem, Left, Right } from 'native-base';
import { connect } from 'react-redux';

import deleteEvent from 'actions/deleteEvent';

const styles = StyleSheet.create({
  body: {
    //flexDirection: 'row',
  },
  title: {
    fontSize: 24,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  counterNumber: {
    fontSize: 20,
  },
  counterText: {
    fontSize: 20,
  },
  deleteIcon: {
    color: 'red',
  },
});

const Event = ({ id, title, timeLeft, deleteEvent }) => {
  const renderTimeUnits = timeLeft.map((unit, index) =>
    <Fragment key={ index }>
      <Text style={ styles.counterNumber }>{ unit.number }</Text>
      <Text style={ styles.counterText }>{ unit.text }</Text>
    </Fragment>
  );

  return (
    <ListItem>
      <Body style={ styles.body }>
        <Text style={ styles.title }>{ title }</Text>
        <View style={ styles.counter }>
          { renderTimeUnits }
        </View>
      </Body>
      <Right>
        <Button transparent onPress={ () => deleteEvent(id) }>
          <Icon name='trash' style={ styles.deleteIcon } />
        </Button>
      </Right>
    </ListItem>
  );
};

export default connect(
  null,
  { deleteEvent },
)(Event);
