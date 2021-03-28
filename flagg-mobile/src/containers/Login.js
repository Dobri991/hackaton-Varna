import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, TextInput } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { sha256 } from 'react-native-sha256';
import { login } from '../api/OutpostsClient';
import { CommonActions } from '@react-navigation/native';

const Login = ({ navigation, theme }) => {
  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async () => {
    let hashedPassword = null;
    await sha256(password).then((hash) => {
      hashedPassword = hash;
    });

    let body = {
      email: userNameOrEmail,
      password: hashedPassword
    };

    const response = await login(body);
    const token = response.data?.token;

    if (token) {
      await AsyncStorage.setItem('token', token);
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/logo_high_res_512.png')} style={styles.logo} />
      <TextInput
        label="Username or Email"
        value={userNameOrEmail}
        mode="outlined"
        style={styles.textField}
        onChangeText={(text) => setUserNameOrEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        style={styles.textField}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        mode="contained"
        onPress={() => {
          authenticate();
        }}
        style={styles.button}>
        Log In
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textField: {
    marginHorizontal: 10
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 30
  },
  button: {
    marginTop: 30,
    marginHorizontal: 10
  }
});

export default withTheme(Login);
