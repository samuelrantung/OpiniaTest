import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme, IMGProfilePicture, IcStar} from '../../../../assets';
import {Gap} from '../../../../components';

type Props = {};

const ProfileHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable>
          <Image style={styles.profilePicture} source={IMGProfilePicture} />
        </Pressable>

        <View style={styles.topContainer}>
          <View>
            <Text style={styles.name}>Skylar Vaccaro</Text>
            <View style={styles.ratingContainer}>
              <IcStar />
              <IcStar />
              <IcStar />
              <IcStar />
              <IcStar />
            </View>
          </View>
          <Gap height={24} />
          <View style={styles.infoContainer}>
            <Text style={styles.occupation}>Penulis | Politisi</Text>
            <Text style={styles.quotes}>
              "Hidup itu sederhana, kita yang membuatnya sulit."
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomSectionContainer}>
            <Text style={styles.sectionTitle}>Postingan</Text>
            <Text style={styles.sectionValue}>26</Text>
          </View>
          <View style={[styles.bottomSectionContainer, styles.inlineBorder]}>
            <Text style={styles.sectionTitle}>Mengikuti</Text>
            <Text style={styles.sectionValue}>30</Text>
          </View>
          <View style={styles.bottomSectionContainer}>
            <Text style={styles.sectionTitle}>Pengikut</Text>
            <Text style={styles.sectionValue}>29</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: -30,
  },
  innerContainer: {
    elevation: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 7,
  },

  profilePicture: {
    borderRadius: 78,
    width: 78,
    height: 78,
    position: 'absolute',
    left: 18,
    top: -33,
  },

  topContainer: {
    paddingVertical: 17,
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.fontDark,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  occupation: {
    fontSize: 14,
    color: theme.colors.fontDark,
    marginBottom: 3,
  },
  quotes: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.fontDark,
    width: 203,
    textAlign: 'center',
  },

  bottomContainer: {
    backgroundColor: theme.colors.primary,
    paddingBottom: 7,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  bottomSectionContainer: {
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  inlineBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.white,
  },
  sectionTitle: {
    fontSize: 14,
    color: theme.colors.fontLight,
  },
  sectionValue: {
    fontSize: 16,
    color: theme.colors.fontLight,
    fontWeight: '600',
  },
});
