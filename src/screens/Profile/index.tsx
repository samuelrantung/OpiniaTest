import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, TopBar} from '../../components';
import {IcCamera, IMGProfileBanner, theme} from '../../assets';
import {PointSection, ProfileHeader} from './components';

type Props = {};

const Profile = (props: Props) => {
  return (
    <View style={styles.container}>
      <TopBar title="Profil" />
      <View>
        <Image style={styles.imageBanner} source={IMGProfileBanner} />
        <Pressable style={styles.pictureButton}>
          <IcCamera />
        </Pressable>
        <ProfileHeader />
        <Gap height={17} />
        <PointSection />
        <Gap height={15} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },

  imageBanner: {
    width: '100%',
    height: 180,
  },
  pictureButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: 15,
    right: 20,
  },
});
