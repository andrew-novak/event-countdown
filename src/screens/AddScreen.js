import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Form, Item, Label } from 'native-base';
import { connect } from 'react-redux';

import InputTitle from 'components/InputTitle';
import PickDate from 'components/PickDate';
import PickTime from 'components/PickTime.js';
import ButtonAdd from 'components/ButtonAdd.js';
import { setDateTime } from 'actions/datePickers';

const styles = StyleSheet.create({
  submitMargin: {
    marginTop: 30,
  },
});

const AddScreen = ({ setDateTime }) => {
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
            <ButtonAdd />
          </View>
        </Form>
      </Content>
    </Container>
  );
};

export default connect(
  null,
  { setDateTime },
)(AddScreen);
