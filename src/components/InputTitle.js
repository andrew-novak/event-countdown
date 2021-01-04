import React from 'react';
import { Input } from 'native-base';
import { connect } from 'react-redux';

import { changeTextInput } from 'actions/textInputs';

const InputTitle = ({ newEventTitle, changeTextInput }) => {
  return (
    <Input
      value={ newEventTitle }
      onChange={ event =>
        changeTextInput({
          field: 'newEventTitle',
          value: event.nativeEvent.text,
        })
      }
    />
  );
};

const mapState = state => {
  const { newEventTitle } = state.textInputs;
  return { newEventTitle };
};

export default connect(
  mapState,
  { changeTextInput },
)(InputTitle);
