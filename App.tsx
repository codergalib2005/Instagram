import React from 'react';
import {Text, View} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text
        style={{
          color: colors.primary,
          fontSize: fonts.size.default,
        }}>
        Hello world
        <AntDesign name="dribbble" size={fonts.size['xxlg']} />
      </Text>
    </View>
  );
};

export default App;
