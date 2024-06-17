import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;