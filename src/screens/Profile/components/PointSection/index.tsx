import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcChevroletRight, IcPointBadge, theme} from '../../../../assets';
import {Gap} from '../../../../components';

type Props = {};

const PointSection = (props: Props) => {
  return (
    <View style={styles.container}>
      <IcPointBadge />
      <Gap width={12} />
      <View style={styles.textContainer}>
        <Text style={styles.pointTitle}>Total Poin Anda</Text>
        <View style={styles.row}>
          <Text style={styles.totalPoint}>230 </Text>
          <Text style={styles.claim}>Klaim Reward</Text>
        </View>
      </View>
      <IcChevroletRight />
    </View>
  );
};

export default PointSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.lightGray,
    paddingHorizontal: 20,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
  },
  pointTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.fontDark,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPoint: {
    color: '#EA6C00',
    fontSize: 16,
    fontWeight: '700',
  },
  claim: {
    fontSize: 12,
    color: '#747474',
  },
});
