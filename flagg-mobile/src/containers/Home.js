import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { loginButton, flagEditorButton } from '../components/NavigationButtons';
import { getAllOutposts, getBeach } from '../api/OutpostsClient';
import { generateColor } from '../common/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation, theme }) => {
  const [allOutposts, setAllOutposts] = useState(null);
  const [latitude, setLatitude] = useState(43.1768858);
  const [longitude, setLongitude] = useState(27.9133189);

  useEffect(async () => {
    const allOutposts = await getAllOutposts();
    setAllOutposts(allOutposts.data);
  }, []);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    navigation.setOptions({
      headerRight: () => (token ? flagEditorButton(navigation) : loginButton(navigation))
    });
  }, []);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      const response = await getBeach(token);
      console.log(response.data);
      if (response.data.lat && response.data.lon) {
        setLatitude(parseFloat(response.data.lat));
        setLongitude(parseFloat(response.data.lon));
      }
    }
  }, []);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}>
      {allOutposts &&
        allOutposts.map((outpost, index) => {
          return (
            <Marker
              id={index}
              key={index}
              title={outpost.name}
              coordinate={{ latitude: parseFloat(outpost.lat), longitude: parseFloat(outpost.lon) }}
              pinColor={generateColor(outpost.flag)}
            />
          );
        })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Home;
