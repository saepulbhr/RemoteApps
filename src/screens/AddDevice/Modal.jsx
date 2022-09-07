import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Divider, Modal, Portal, Provider } from 'react-native-paper'; 
import Icon from 'react-native-vector-icons/Ionicons';

function ModalSetWifi({ onVisible, onHide, onTurnOnfWifi }) {
  const [visible, setVisible] = useState(onVisible);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onHide}
          contentContainerStyle={containerStyle}
          style={styles.modal}
        >
          <View style={styles.container}>
            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={onHide}>
                <Icon name='close-outline' size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.textHeaderModal}>Nyalakan WIFI</Text>
            <Divider />
            <View style={styles.containerButton}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <Icon name='ios-wifi' size={62} />
              </View>
              <View>
                <Button mode='contained' onPress={onTurnOnfWifi}>
                  Set now
                </Button>
                <Button mode='text' onPress={onHide} style={{ marginTop: 16 }}>
                  Already set ignore
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
  },
  textHeaderModal: {
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.8,
    marginBottom: 16,
  },
  containerButton: {
    marginTop: 16,
    height: 250,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default ModalSetWifi;
