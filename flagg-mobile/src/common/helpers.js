import { colors } from './colors';
import { CommonActions } from '@react-navigation/native';

export const generateColor = (selectedFlag) => {
  for (const [key, value] of Object.entries(colors)) {
    if (key === selectedFlag) {
      return value;
    }
  }
  return '#F0F0F0';
};

export const wipeNavStack = (navigation, screenName) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: screenName }]
    })
  );
};
