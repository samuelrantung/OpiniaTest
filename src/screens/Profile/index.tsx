import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, TopBar} from '../../components';
import {IcCamera, IcFloating, IMGProfileBanner, theme} from '../../assets';
import {
  CompleteProfile,
  MenuSection,
  PointSection,
  ProfileHeader,
} from './components';

type Props = {};

const Profile = (props: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.floatingAction}>
        <IcFloating />
      </Pressable>
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
        <CompleteProfile />
        <Gap height={12} />
        <MenuSection />
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

  floatingAction: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    backgroundColor: theme.colors.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
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
