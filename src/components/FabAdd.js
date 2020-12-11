import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Fab, Icon } from 'native-base';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const FabAdd = ({ navigation: { navigate } }) => (
  <View style={ styles.root }>
    <Fab onPress={ () => navigate('Add') }>
      <Icon name='add' />
    </Fab>
  </View>
);

export default FabAdd;
