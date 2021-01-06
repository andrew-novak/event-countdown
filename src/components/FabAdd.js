import React from 'react';
import { StyleSheet, View } from 'react-native';
import Fab from 'react-native-fab';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  fabContainer: {
  },
  fab: {
  },
});

const FabAdd = ({ navigation: { navigate } }) => (
  <View style={ styles.root }>
    <Fab
      iconTextComponent={ <Icon name='add' /> }
      onClickAction={ () => navigate('Add') }
    >
      <Icon name='add' />
    </Fab>
  </View>
);

export default FabAdd;
