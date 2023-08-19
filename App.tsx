import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function App() {
  return (
    <View style={styles.post}>
      {/* Post Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>codergalib2005</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Post Content */}
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2745258/pexels-photo-2745258.jpeg',
        }}
        style={styles.image}
      />
      {/* Post Footer */}
    </View>
  );
}

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {},
  userAvatar: {},
  userName: {},
  threeDots: {},
});
