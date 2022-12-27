import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {IcArrowLeft, IcShare, IcUser, theme} from '../../../assets';
import {Gap} from '../../atom';

type Props = {
  title: string;
};

const TopBar = (props: Props) => {
  const {title} = {...props};
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#06B1A1', '#06688F']}
      style={styles.container}>
      <View style={styles.headerLeftContainer}>
        <Pressable onPress={() => handleBack()}>
          <IcArrowLeft />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.headerRightContainer}>
        <IcShare />
        <Gap width={20} />
        <IcUser />
      </View>
    </LinearGradient>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftContainer: {
    width: '20%',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: theme.colors.fontLight,
  },
  headerRightContainer: {
    justifyContent: 'flex-end',
    width: '20%',
    flexDirection: 'row',
  },
});
