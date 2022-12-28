import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IcConversations,
  IcGroups,
  IcHome,
  IcSearch,
  theme,
} from '../../../assets';

type Props = {};

const BottomBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <IcHome />
      </Pressable>
      <Pressable>
        <IcSearch />
      </Pressable>
      <Pressable>
        <IcGroups />
      </Pressable>
      <Pressable>
        <IcConversations />
      </Pressable>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',

    borderTopColor: '#F2F2F2',
    borderTopWidth: 1,
  },
});
