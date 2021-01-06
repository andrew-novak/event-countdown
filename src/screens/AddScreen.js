import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Label } from 'native-base';
import SnackBar from 'react-native-snackbar-component';
import { connect } from 'react-redux';

import InputTitle from 'components/InputTitle';
import PickDate from 'components/PickDate';
import PickTime from 'components/PickTime.js';
import ButtonAdd from 'components/ButtonAdd.js';
import Snackbar from 'components/Snackbar';
import { setDateTime } from 'actions/datePickers';

const styles = StyleSheet.create({
  submitMargin: {
    marginTop: 30,
  },
});

const AddScreen = ({ navigation, setDateTime, snackbar }) => {
  useEffect(() => {
    setDateTime(new Date());
  }, []);

  return (
    <Container>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Title</Label>
            <InputTitle />
          </Item>
          <Item>
            <PickDate />
          </Item>
          <Item>
            <PickTime />
          </Item>
          <View style={ styles.submitMargin }>
            <ButtonAdd navigation={ navigation } />
          </View>
        </Form>
      </Content>
      <Snackbar
        visible={ snackbar.visible }
        variant={ snackbar.variant }
        message={ snackbar.message }
      />
    </Container>
  );
};

const mapState = state => {
  const { visible, variant, message } = state.snackbars.addScreen;
  return { snackbar: { visible, variant, message } };
};

export default connect(
  mapState,
  { setDateTime },
)(AddScreen);
