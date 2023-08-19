import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  commentText: {
    color: colors.black,
    flex: 1,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
