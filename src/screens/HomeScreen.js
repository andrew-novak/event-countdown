import React from 'react';
import { Container } from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Event from 'components/Event';
import Header from 'components/Header';
import FabAdd from 'components/FabAdd';
import getTimeLeft from './getTimeLeft';

const HomeScreen = ({ time, events, navigation }) => {
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
      <FabAdd navigation={ navigation } />
    </Container>
  );
};

const mapState = state => {
  const { time, events } = state;
  return { time, events };
};

export default connect(
  mapState,
)(HomeScreen);
