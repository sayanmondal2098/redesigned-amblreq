import React, { useState, useEffect, useLayoutEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

import { useNavigation, navigate } from "@react-navigation/native";


export default function Mapview() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let latitude = '';
  let longitude = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)
    text = JSON.stringify(location);
    latitude = location['coords']['latitude'];
    longitude = location['coords']['longitude']
  }

  state = {
    mapRegion: { latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },

  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={location}
      initialRegion={{
          "latitude": 39.97343096953564,
          "latitudeDelta": 0.0922,
          "longitude": -75.12520805829233,
          "longitudeDelta": 0.0421,
      }}
      onRegionChange={region => setRegion(region)}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});