import React from 'react';
import {Pressable, Text} from 'react-native';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: React.ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };
  return <Pressable onPress={onDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
