
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

//import Card
import { Card } from 'react-native-paper';

const FareDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card>
          <Text style={styles.paragraph}>
           Driver Name : 
          </Text>
                    <Text style={styles.paragraph}>
            Fare : 100 Rs
          </Text>
            <Text style={styles.paragraph}>
            OTP : 123456
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});


export default FareDetails;