import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePress/DoublePressable';

interface PropsTypes {
  post: IPost;
}

const FeedPost: React.FC<PropsTypes> = ({post}: PropsTypes) => {
  const {comments, createdAt, description, id, image, user} = post;
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const handleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      handleLike();
    }
    lastTap = now;
  };
  const handleLike = () => {
    setIsLiked(v => !v);
  };
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
      <DoublePressable>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </DoublePressable>
      {/* Post Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={handleDoublePress}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              color={colors.black}
              style={styles.icon}
            />
          </Pressable>
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
        <Text numberOfLines={isDescriptionExpanded ? 0 : 2} style={styles.text}>
          <Text style={styles.bold}> codergalib2005</Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          provident similique itaque non impedit qui ipsa voluptate
          reprehenderit totam delectus ea repellat, nihil modi saepe
          perspiciatis dolor.
        </Text>
        <Text onPress={handleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
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
