import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Gap, TopBar} from '../../components';
import {IMGBackground, IMGProfilePicture, theme} from '../../assets';

type Props = {};

const dummy = [
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
  {
    name: 'Julia Maretta',
    following: false,
  },
];

const Following = (props: Props) => {
  const [data, setData] = useState(dummy);

  const handleFollowButton = (index: number) => {
    const newData = [...data];
    const temp = data[index];

    temp.following = !data[index].following;
    newData[index] = temp;

    setData(newData);
  };

  return (
    <ImageBackground style={styles.container} source={IMGBackground}>
      <TopBar title="Mengikuti" type="simple" />
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item, index}) => (
          <View style={styles.itemContainer} key={index}>
            <View style={styles.profileContainer}>
              <Image style={styles.profile} source={IMGProfilePicture} />
            </View>
            <Gap width={17} />
            <Text style={styles.username}>{item.name}</Text>
            <Pressable
              style={styles.button}
              onPress={() => handleFollowButton(index)}>
              <Text style={styles.buttonLabel}>
                {item.following ? 'Mengikuti' : 'Ikuti'}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </ImageBackground>
  );
};

export default Following;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },

  itemContainer: {
    height: 42,
    flexDirection: 'row',
    borderRadius: 42,
    borderWidth: 0.1,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 6,
    marginBottom: 5,
  },
  profileContainer: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 35,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 28,
    height: 28,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },

  username: {
    flex: 1,
  },

  button: {
    width: 106,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  buttonLabel: {
    fontSize: 15,
    color: theme.colors.fontLight,
  },
});
