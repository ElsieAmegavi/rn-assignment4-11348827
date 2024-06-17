import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <SearchBar/>
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