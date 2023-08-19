import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface PropsTypes {
  comment: {
    id: string;
    comment: string;
    user: {
      username: string;
      id: string;
    };
  };
}
const Comment: React.FC<PropsTypes> = ({comment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign name={'hearto'} color={colors.black} style={styles.icon} />
    </View>
  );
};

export default Comment;
