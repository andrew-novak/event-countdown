import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { connect } from 'react-redux';

import { DAYS, MONTHS } from 'constants/picker';
import { pickYear, pickMonth, pickDay } from 'actions/picker';

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

const PickDate = ({ years, yearPosition, month, days, daysInMonth, pickYear, pickMonth, pickDay }) => (
  <View style={ styles.pickersContainer }>
    <WheelPicker
      isCyclic
      data={ DAYS[daysInMonth] }
      style={ styles.picker }
      onItemSelected={ pickDay - 1 }
      style={ styles.picker }
    />
    <WheelPicker
      isCyclic
      data={ MONTHS }
      onSelectedItem={ month - 1 }
      onItemSelected={ pickMonth }
      style={ styles.picker }
    />
    <WheelPicker
      isCyclic
      data={ years.map(year => year.toString()) }
      selectedItem={ yearPosition }
      onItemSelected={ pickYear }
      style={ styles.picker }
    />
  </View>
);

const mapState = state => {
  const { years, yearPosition, month, day, daysInMonth } = state.picker;
  return { years, yearPosition, month, day, daysInMonth };
};

export default connect(
  mapState,
  { pickYear, pickMonth, pickDay },
)(PickDate);
