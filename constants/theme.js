import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  accent: '#FF7363',
  purple: '#817DC0',

  black: '#171717',
  white: '#FFFFFF',
  background: '#252C4A',
};

export const SIZES = {
  base: 10,
  width,
  height,
};

export const DEFAULT_VALUE = {
  gender: "male",
  height: 160,
  weight: 60,
  age: 20,
};
export const MIN_WEIGHT = 10;
export const MAX_WEIGHT = 150;
export const MIN_AGE = 1;
export const MAX_AGE = 150;