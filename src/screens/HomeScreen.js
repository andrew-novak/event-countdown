import React, { useState } from 'react';
import { Container } from 'native-base';
import { FlatList } from 'react-native';
import Fab from 'react-native-fab';
import { connect } from 'react-redux';

import Event from 'components/Event';
import Header from 'components/Header';
import Snackbar from 'components/Snackbar';
import getTimeLeft from './getTimeLeft';

const HomeScreen = ({ navigation: { navigate }, time, events, snackbar }) => {
  const [ snackOffset, setSnackOffset ] = useState(0);

  const renderItem = ({ item }) => {
    const { id, title, date } = item;
    const timeLeft = getTimeLeft(date, time);
    return (
      <Event
        id={ id }
        title={ title }
        timeLeft={ timeLeft }
      />
    );
  };

  return (
    <Container>
      <FlatList
        data={ events }
        renderItem={ renderItem }
        keyExtractor={ (item, index) => item.id.toString() }
      />
      <Fab
        snackOffset={ snackOffset }
        onClickAction={ () => navigate('Add') }
      />
      <Snackbar
        visible={ snackbar.visible }
        variant={ snackbar.variant }
        message={ snackbar.message }
        distanceCallback={ distance => setSnackOffset(distance) }
      />
    </Container>
  );
};

const mapState = state => {
  const { time, events } = state;
  const { visible, variant, message } = state.snackbars.homeScreen;
  return { time, events, snackbar: { visible, variant, message } };
};

export default connect(
  mapState,
)(HomeScreen);
