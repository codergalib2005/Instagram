import {TextStyle} from 'react-native';

interface Size {
  xs: number;
  small: number;
  default: number;
  md: number;
  xlg: number;
  xxlg: number;
}
interface Weight {
  [key: string]: TextStyle['fontWeight'];
}
interface Fonts {
  size: Size;
  weight: Weight;
}

const fonts: Fonts = {
  size: {
    xs: 10,
    small: 12,
    default: 14,
    md: 16,
    xlg: 24,
    xxlg: 30,
  },
  weight: {
    full: '900',
    bold: 'bold',
    semi: '600',
    normal: 'normal',
    thin: '200', // Map thin font weight to '200'
  },
};

export default fonts;
