import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { connect } from 'react-redux';

import { HOURS, MINUTES, SECONDS } from 'constants/datePickers';
import { pickTime } from 'actions/datePickers';

const styles = StyleSheet.create({
  pickersContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  picker: {
    height: 114,
    width: null,
    flex: 1,
  },
});

const PickTime = ({ hour, minute, second, pickTime }) => (
  <View style={ styles.pickersContainer }>
    <WheelPicker
      isCyclic
      data={ HOURS }
      selectedItem={ hour }
      onItemSelected={ position => pickTime('hour', position) }
      style={ styles.picker }
    />
    <WheelPicker
      isCyclic
      data={ MINUTES }
      selectedItem={ minute }
      onItemSelected={ position => pickTime('minute', position) }
      style={ styles.picker }
    />
    <WheelPicker
      isCyclic
      data={ SECONDS }
      selectedItem={ second }
      onItemSelected={ position => pickTime('second', position) }
      style={ styles.picker }
    />
  </View>
);

const mapState = state => {
  const { hour, minute, second } = state.datePickers;
  return { hour, minute, second };
};

export default connect(
  mapState,
  { pickTime },
)(PickTime);
