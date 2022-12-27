import {View} from 'react-native';
import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const Gap = (props: Props) => {
  const {width, height} = {...props};
  return <View style={{width: width, height: height}} />;
};

export default Gap;
