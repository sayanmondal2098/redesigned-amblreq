import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {

  const [email, setemailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');

  const [lastName, setlastName] = useState('');
  const [phone, setPhone] = useState('');


  const navigation = useNavigation();


    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Ambulance Request Signup</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setemailAddress(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="First Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setfirstName(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Last Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setlastName(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Phone..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPhone(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("LoginScreen")} >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        >
          <Text style={styles.loginText}>Continue Without Login</Text>
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default SignupScreen;