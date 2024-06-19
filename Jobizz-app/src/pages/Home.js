import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import FeaturedJobs from '../components/FeaturedJobs';
import PopularJobs from '../components/PopularJobs';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <SearchBar/>
      <FeaturedJobs/>
      <PopularJobs/>
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