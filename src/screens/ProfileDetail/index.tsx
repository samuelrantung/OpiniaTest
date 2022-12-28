import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IcArrowLeftBlack,
  IcHobi,
  IcPekerjaan,
  IcPendidikan,
  IcTempatTinggal,
  IcWebsite,
  IMGBackground,
  theme,
} from '../../assets';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ProfileDetail = (props: Props) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground style={styles.background} source={IMGBackground}>
      <Pressable onPress={() => handleBack()}>
        <IcArrowLeftBlack />
      </Pressable>
      <Gap height={31} />
      <View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pekerjaan</Text>
          <Gap height={10} />
          <View style={styles.sectionInfoContainer}>
            <IcPekerjaan />
            <Gap width={20} />
            <View>
              <Text style={styles.textMain}>Graphic Design</Text>
              <Text style={styles.text}>Opinia</Text>
              <Text style={styles.text}>(2008 - Sekarang)</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pendidikan</Text>
          <Gap height={10} />
          <View style={styles.sectionInfoContainer}>
            <IcPendidikan />
            <Gap width={20} />
            <View>
              <Text style={styles.textMain}>Design Engineering</Text>
              <Text style={styles.text}>
                Politeknik Manufaktur negeri Bandung
              </Text>
              <Text style={styles.text}>(2011-2013)</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Tempat Tinggal</Text>
          <Gap height={10} />
          <View style={styles.sectionInfoContainer}>
            <IcTempatTinggal />
            <Gap width={20} />
            <View>
              <Text style={styles.textMain}>Kota Bekasi</Text>
              <Text style={styles.text}>(2011-2013)</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hobi</Text>
          <Gap height={10} />
          <View style={styles.sectionInfoContainer}>
            <IcHobi />
            <Gap width={20} />
            <View>
              <Text style={styles.textMain}>Musik</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Website:</Text>
          <Gap height={10} />
          <View style={styles.sectionInfoContainer}>
            <IcWebsite />
            <Gap width={20} />
            <View>
              <Text style={styles.textMain}>www.gdsagdsagdsa.com</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  sectionContainer: {
    paddingBottom: 10,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 0.3,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: '700',
  },
  sectionInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textMain: {
    fontSize: 16,
    color: theme.colors.fontDark,
  },
  text: {
    fontSize: 14,
    color: theme.colors.fontDark,
  },
});
