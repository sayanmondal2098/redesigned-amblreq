import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createTwoButtonAlert } from '../api/Alert';
import { ValidateUser } from '../api/ValidateUser';
import { AsyncStorage } from 'react-native';



const LoginScreen = () => {

  const [email, setemailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loggetId, setloggetId] = useState('');

  AsyncStorage.getItem("LogedId").then((value) => {
    setloggetId(value)
  })
    

  const loginHandler = () => {
//    getUserDate(email);
    ValidateUser(email);
    setTimeout(() => {console.log("Wait")}, 2000);
   AsyncStorage.getItem('loggetId').then((v) => setloggetId(v) )

    //console.log(" ================ " + JSON.stringify(info));
    setTimeout(() => {createTwoButtonAlert('Login Info', "Hello Change it" );}, 2500);

  }

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Ambulance Request</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setemailAddress(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)} />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => loginHandler()}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
      >
        <Text style={styles.loginText}>Continue Without Login</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen")}
      >
        <Text style={styles.loginText}>Bypass MapScreen</Text>
      </TouchableOpacity>


    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});

export default LoginScreen;