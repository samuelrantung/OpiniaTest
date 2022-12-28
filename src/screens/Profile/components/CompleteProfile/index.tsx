import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../../../../components';

type Props = {};

const CompleteProfile = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lengkapi Profil Anda 2/3</Text>
      <Gap height={6} />
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>
    </View>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: '#797979',
  },
  progressBarContainer: {
    height: 4,
    width: '100%',
    borderWidth: 1,
    borderColor: '#05B1A1',
  },
  progressBar: {
    backgroundColor: '#EA6C00',
    flexDirection: 'row',
    height: '100%',
    width: '66.66%',
  },
});
