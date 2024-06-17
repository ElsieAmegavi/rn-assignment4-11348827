import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.container}>

        <View style={styles.header}>

            <View>
                <Text style={styles.title}>Eric Atsu</Text>
                <Text style={styles.subtitle}>eric@gmail.com</Text>
            </View>

            <View style={styles.profileView}>
                <Image style={styles.profilePicture}
                source={require('../../assets/profile.png')}
                />
            </View>

            

        </View>

        
    
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    // paddingTop: 5,
    fontSize: 20,
    color: 'grey',
  },
  profileView: {
    justifyContent: 'space-between'
  },
  profilePicture: {
    height: 50,
    width: 50,
    // paddingTop: '100'
  },
});

export default HomeHeader;