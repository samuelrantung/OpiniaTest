import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IcComments,
  IcHappy,
  IcInspiring,
  IcReshare,
  IcSeen,
  IcSharePost,
  IMGProfilePicture,
  theme,
} from '../../../assets';
import {Gap} from '../../atom';

type Props = {};

const Post = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profile} source={IMGProfilePicture} />
        </View>
        <Gap width={8} />
        <View>
          <Text style={styles.username}>Julia Mareta</Text>
          <Text style={styles.info}>19 menit lalu | Idea</Text>
        </View>
      </View>
      <Gap height={7} />
      <View>
        <Text style={styles.status}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur,{' '}
          <Text style={styles.moreText}>Selengkapnya...</Text>
        </Text>
      </View>
      <Gap height={10} />
      <View style={styles.actionContainer}>
        <Pressable style={styles.actionButton}>
          <IcInspiring />
          <Gap width={3} />
          <Text style={styles.actionLabel}>32</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <IcHappy />
          <Gap width={3} />
          <Text style={styles.actionLabel}>23</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <IcComments />
          <Gap width={3} />
          <Text style={styles.actionLabel}>15</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <IcSeen />
          <Gap width={3} />
          <Text style={styles.actionLabel}>22</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <IcReshare />
          <Gap width={3} />
          <Text style={styles.actionLabel}>12</Text>
        </Pressable>
        <Gap width={'10%'} />
        <Pressable style={styles.actionButton}>
          <IcSharePost />
        </Pressable>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 35,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
  username: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.fontDark,
  },
  info: {
    fontSize: 12,
    color: '#797979',
  },

  status: {
    fontSize: 14,
    color: theme.colors.fontDark,
    lineHeight: 17,
  },
  moreText: {
    fontSize: 14,
    color: theme.colors.primary,
    lineHeight: 17,
  },

  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#354044',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionLabel: {
    fontSize: 14,
    color: theme.colors.primary,
  },
});
