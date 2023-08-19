import {FlatList} from 'react-native';
import React from 'react';
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => `post-${item.id}`}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
