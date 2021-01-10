import React from 'react';
import SnackBar from 'react-native-snackbar-component';

import theme from 'theme';

export default ({ visible, variant, message, distanceCallback }) => {
  const bgColors = {
    success: theme.color.snackbar.success,
    warning: theme.color.snackbar.warning,
    danger: theme.color.snackbar.danger,
  };

  return (
    <SnackBar
      visible={ visible }
      textMessage={ message }
      backgroundColor={ bgColors[variant] }
      messageColor={ theme.color.snackbar.text }
      distanceCallback={ distanceCallback }
    />
  );
}
