import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FlagItem from '../components/FlagItem';
import { getOutpostsFor } from '../api/OutpostsClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { wipeNavStack } from '../common/helpers';
import { logoutButton, backButton } from '../components/NavigationButtons';

const FlagEditor = ({ navigation, theme }) => {
  const [outposts, setOutposts] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => logoutButton(navigation),
      headerLeft: () => backButton(navigation)
    });
  }, []);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    const response = await getOutpostsFor(token);
    setOutposts(response.data);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {outposts &&
        outposts.map((flag) => {
          console.log(flag);
          return <FlagItem key={flag.outpost_id} item={flag} />;
        })}
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

export default withTheme(FlagEditor);
