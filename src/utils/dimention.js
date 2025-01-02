import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  export const Height = props => {
    const Height = hp(props);
    return Height;
  };
  
  export const Width = props => {
    const width = wp(props);
    return width;
  };