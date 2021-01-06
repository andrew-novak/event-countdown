import React from 'react';
import SnackBar from 'react-native-snackbar-component';

export default ({ visible, variant, message, distanceCallback }) => {
  const bgColors = {
    success: '#508330',
    warning: '#bfac2e',
    danger: '#a72b2b',
  };

  return (
    <SnackBar
      visible={ visible }
      textMessage={ message }
      backgroundColor={ bgColors[variant] }
      distanceCallback={ distanceCallback }
    />
  );
}
