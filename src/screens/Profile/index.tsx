import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BottomBar, Gap, Post, TopBar} from '../../components';
import {IcCamera, IcFloating, IMGProfileBanner, theme} from '../../assets';
import {
  CompleteProfile,
  MenuSection,
  PointSection,
  ProfileHeader,
} from './components';
import CameraModal from '../../components/molecules/CameraModal';

type Props = {};

const Profile = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenCamera = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TopBar title="Profil" />
      <ScrollView>
        <View>
          <Image style={styles.imageBanner} source={IMGProfileBanner} />
          <Pressable
            style={styles.pictureButton}
            onPress={() => handleOpenCamera()}>
            <IcCamera />
          </Pressable>
          <ProfileHeader />
          <Gap height={17} />
          <PointSection />
          <Gap height={15} />
          <CompleteProfile />
          <Gap height={12} />
          <MenuSection />
          <Gap height={20} />
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
      <BottomBar />
      <Pressable style={styles.floatingAction}>
        <IcFloating />
      </Pressable>
      <CameraModal state={modalVisible} setState={setModalVisible} />
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
