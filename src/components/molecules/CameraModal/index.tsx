import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {IcGallery, IcKamera, theme} from '../../../assets';
import {Gap} from '../../atom';

type Props = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const CameraModal = (props: Props) => {
  const {state, setState} = {...props};

  const handleCancel = () => {
    setState(false);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={state}
      onRequestClose={() => {
        setState(!state);
      }}>
      <Pressable style={styles.centeredView} onPress={() => handleCancel()}>
        <Pressable style={styles.modalView}>
          <View style={styles.paddingHorizontal}>
            <View style={styles.topContainer}>
              <Pressable style={styles.sourceButton}>
                <IcKamera />
                <Gap height={10} />
                <Text style={styles.label}>Kamera</Text>
              </Pressable>
              <Pressable style={styles.sourceButton}>
                <IcGallery />
                <Gap height={10} />
                <Text style={styles.label}>Gallery</Text>
              </Pressable>
            </View>
            <Pressable style={styles.deleteButton}>
              <Text style={styles.deleteText}>HAPUS GAMBAR BANNER</Text>
            </Pressable>
          </View>

          <Pressable style={styles.cancel} onPress={() => handleCancel()}>
            <Text style={styles.cancelText}>BATAL</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CameraModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    height: 180,
    width: 250,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    paddingTop: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  paddingHorizontal: {
    paddingHorizontal: 8,
    alignItems: 'center',
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    paddingBottom: 13,
    borderBottomColor: theme.colors.white,
    borderBottomWidth: 0.3,
  },
  sourceButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    color: theme.colors.fontLight,
    fontFamily: 'WorkSans-Regular',
  },

  deleteButton: {
    marginTop: 13,
  },
  deleteText: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.fontLight,
  },

  cancel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 39,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  cancelText: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.primary,
  },
});
