import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocal = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    const parsed = JSON.parse(value);
    return parsed;
  }
  catch (error) {
    throw error;
  }
};

export const storeLocal = async ({ key, value }) => {
  try {
    const finalValue = (typeof value === 'object') ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, finalValue);
  }
  catch (error) {
    throw error;
  }
};
