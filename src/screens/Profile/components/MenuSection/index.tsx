import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  IcMenuAll,
  IcMenuArtikel,
  IcMenuIdea,
  IcMenuPetisi,
  IcMenuPoling,
  theme,
} from '../../../../assets';
import {Gap} from '../../../../components';

type Props = {};

// const menuList = ['Semua', 'Idea', 'Artikel', 'Poling', 'Petisi'];
const menuList = [
  {
    title: 'Semua',
    icon: IcMenuAll,
  },
  {
    title: 'Idea',
    icon: IcMenuIdea,
  },
  {
    title: 'Artikel',
    icon: IcMenuArtikel,
  },
  {
    title: 'Poling',
    icon: IcMenuPoling,
  },
  {
    title: 'Petisi',
    icon: IcMenuPetisi,
  },
];

const MenuSection = (props: Props) => {
  const [choosen, setChoosen] = useState(0);

  const handleMenuPress = (index: number) => {
    setChoosen(index);
  };
  return (
    <View style={styles.container}>
      {menuList.map((item, i) => (
        <Pressable
          style={[
            styles.itemContainer,
            i === choosen && styles.activeItemContainer,
          ]}
          key={i}
          onPress={() => handleMenuPress(i)}>
          <View
            style={[
              styles.iconContainer,
              i !== choosen && styles.inactiveIconContainer,
            ]}>
            <item.icon
              style={i === choosen ? styles.active : styles.inactive}
            />
          </View>
          <Gap height={3} />
          <Text style={styles.label}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default MenuSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemContainer: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeItemContainer: {
    backgroundColor: '#F5F5F5',
  },
  iconContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 7,
  },
  inactiveIconContainer: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  label: {
    color: theme.colors.primary,
    fontSize: 12,
  },
  active: {
    color: theme.colors.white,
  },
  inactive: {
    color: theme.colors.primary,
  },
});
