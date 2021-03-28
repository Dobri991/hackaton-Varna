import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { wipeNavStack } from '../common/helpers';

export const loginButton = (navigation, setIsLoggedIn) => {
  return (
    <TouchableOpacity
      style={{ paddingRight: 15 }}
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <Icon name="wb-sunny" size={30} />
    </TouchableOpacity>
  );
};

export const flagEditorButton = (navigation) => {
  return (
    <TouchableOpacity
      style={{ paddingRight: 15 }}
      onPress={() => {
        navigation.navigate('Edit');
      }}>
      <Icon name="flag" size={30} />
    </TouchableOpacity>
  );
};

export const logoutButton = (navigation) => {
  return (
    <TouchableOpacity
      style={{ paddingRight: 15 }}
      onPress={async () => {
        await AsyncStorage.removeItem('token');
        wipeNavStack(navigation, 'Home');
      }}>
      <Icon name="cloud" size={30} />
    </TouchableOpacity>
  );
};

export const backButton = (navigation) => {
  return (
    <TouchableOpacity
      style={{ paddingLeft: 15 }}
      onPress={async () => {
        wipeNavStack(navigation, 'Home');
      }}>
      <Ionicons name="arrow-back" size={30} />
    </TouchableOpacity>
  );
};
