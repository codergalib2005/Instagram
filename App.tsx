import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import FeedPost from './src/components/FeedPost/FeedPost';

const App = () => {
  const isLiked = true;
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
