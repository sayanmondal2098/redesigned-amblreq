import * as React from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { StyleSheet, Text, TextInput ,View, TouchableOpacity, Alert } from 'react-native'
import { Card } from 'react-native-paper'

const { useState, useEffect } = React


const MapScreen = () => {

  const [fromAddress, setfromAddress] = useState('');
  const [hospitalAddress, sethospitalAddress] = useState('');


    const [locationResult, setLocation] = useState(null)
    const [mapRegion, setRegion] = useState(null)
    const [hasLocationPermissions, setLocationPermission] = useState(false)

    useEffect(() => {
        const getLocationAsync = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if ('granted' !== status) {
                setLocation('Permission to access location was denied')
            } else {
                setLocationPermission(true);
            }

            let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({})
            setLocation(JSON.stringify({ latitude, longitude }))

            // Center the map on the location we just fetched.
            setRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
        }

        getLocationAsync()
    })

    if (locationResult === null) {
        return <Text>Finding your current location...</Text>
    }

    if (hasLocationPermissions === false) {
        return <Text>Location permissions are not granted.</Text>
    }

    if (mapRegion === null) {
        return <Text>Map region doesn't exist.</Text>
    }

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Confirm Booking",
            locationResult + "====== " + fromAddress + "===== "+ hospitalAddress,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Book", onPress: () => console.log("Booking Pressed") }
            ]
        );


    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
        }]}>
            <View style={{ flex: 14 }} >
                <MapView

                    style={styles.container}
                    region={mapRegion}
                    initialRegion={{
                        "latitude": 39.97343096953564,
                        "latitudeDelta": 0.0922,
                        "longitude": -75.12520805829233,
                        "longitudeDelta": 0.0421,
                    }}
                    onRegionChange={region => setRegion(region)}
                >

                    <MapView.Marker
                        title="YIKES, Inc."
                        description="Web Design and Development"
                        coordinate={{ "latitude": 39.969183, "longitude": -75.133308 }}
                    />
                </MapView></View>

            <View style={{ flex: 4, backgroundColor: "transparent", alignContent : "center", alignItems: "center" , paddingTop: "5%" }} >
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="From Location"
                        onChangeText={text => setfromAddress(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Hospital Address"
                        
                        onChangeText={text => sethospitalAddress(text)} />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress = {createTwoButtonAlert} >
                    <Text style={styles.loginText}>Book to {hospitalAddress}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputView:{
        width:"100%",
        backgroundColor:"#e6e6ff",
        borderRadius:25,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
      },
      forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"100%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10
      },
      loginText:{
        color:"white"
      }
});

export default MapScreen;