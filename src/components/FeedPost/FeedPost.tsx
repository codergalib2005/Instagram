import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Comment from '../Comment/Comment';

interface PropsTypes {
  post: {
    id: string;
    createdAt: string;
    image: string;
    description: string;
    user: {
      id: string;
      image: string;
      username: string;
    };
    nofComments: number;
    nofLikes: number;
    comments: {
      id: string;
      comment: string;
      user: {
        id: string;
        username: string;
      };
    }[];
  };
}

const FeedPost: React.FC<PropsTypes> = ({post}) => {
  const {comments, createdAt, description, id, image, user} = post;

  const isLiked = true;
  return (
    <View style={styles.post}>
      {/* Post Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Post Content */}
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      {/* Post Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            color={colors.black}
            style={styles.icon}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color={colors.black}
            style={styles.icon}
          />
          <Feather
            name="send"
            size={24}
            color={colors.black}
            style={styles.icon}
          />
          <Feather
            name="bookmark"
            size={24}
            color={colors.black}
            style={{marginLeft: 'auto'}}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>minhazdev</Text> and
          <Text style={styles.bold}>12 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}> codergalib2005</Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          provident similique itaque non impedit qui ipsa voluptate
          reprehenderit totam delectus ea repellat, nihil modi saepe
          perspiciatis dolor.
        </Text>
        {/* Comments */}
        <Text>View all 14 comments</Text>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {/* Posted date */}
        <Text>{createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
