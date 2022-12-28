import {View} from 'react-native';
import React from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
};

const Gap = (props: Props) => {
  const {width, height} = {...props};
  return <View style={{width: width, height: height}} />;
};

export default Gap;
