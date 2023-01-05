import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Platform, Text, View, StyleSheet , TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable";
import { useNavigation, navigate } from "@react-navigation/native";

import * as Location from 'expo-location';

export default function Discover() {
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
  let speed = '';
  let altitude = '';
  let altitudeAccuracy = '';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)
    text = JSON.stringify(location);
    latitude = location['coords']['latitude'];
    longitude = location['coords']['longitude'];
    speed = location['coords']['speed'];
    altitudeAccuracy = location['coords']['altitudeAccuracy'];
    altitude = location['coords']['altitude'];
  }

  return (
    <View>
      <Text className = "text-[38px] font-bold">{latitude}</Text>
      <Text className = "text-[38px] font-bold">{longitude}</Text>
      <Text className = "text-[38px] font-bold">{speed}</Text>

      <Text className = "text-[38px] font-bold">{altitudeAccuracy}</Text>

      <Text className = "text-[38px] font-bold">{altitude}</Text>


      


      <TouchableOpacity
          onPress={() => navigation.navigate("MapScreen")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
    </View>
  );



}

