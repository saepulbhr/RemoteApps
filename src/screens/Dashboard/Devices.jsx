import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  RefreshControl,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Gate from '../../common/gate.png';
import { ScrollView } from 'react-native-gesture-handler';
import SnackbarError from '../Snackbar/Error';
import NetInfo from '@react-native-community/netinfo';
import { ActivityAction, startActivityAsync } from 'expo-intent-launcher';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Devices(props) {
  const { status, onChangeStatus } = props;
  const [refreshing, setRefreshing] = useState(false);
  const [isStatus, setIsStatus] = useState({ status: false, message: '' });
  const navigation = useNavigation();
  // const menus = [{ id: 1, title: 'Gerbang', link: 'Gerbang', icon: Gate }];
  const menus = [];

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const handleClick = (id, link) => {
    onChangeStatus(id);
    navigation.navigate(link);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    // NetInfo.fetch().then((state) => {
    //   if (state.type === 'cellular') {
    //     const wifi = (ActivityAction.WIFI_SETTINGS =
    //       'android.settings.WIFI_SETTINGS');
    //     startActivityAsync(wifi);
    //   }
    // });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {menus.length === 0 && (
          <View
            style={{
              flex: 0.9,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon name='devices' size={42} style={{ marginBottom: 8 }} />
            <Button
              mode='contained'
              style={{ maxWidth: 150 }}
              onPress={() => navigation.navigate('add device')}
            >
              Tambah Alat
            </Button>
          </View>
        )}

        <View style={styles.containerButton}>
          {menus &&
            menus?.map((menu) => (
              <TouchableOpacity
                key={menu.title}
                style={[styles.button]}
                onPress={() => handleClick(menu.id, menu.link)}
              >
                <Image source={menu.icon} style={{ width: 50, height: 50 }} />
                <Text
                  style={{
                    marginTop: 8,
                  }}
                >
                  {menu.title}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>

      {isStatus.status && (
        <SnackbarError status={isStatus.status} message={isStatus.message} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  buttonAdd: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: 120,
    padding: 16,
    borderWidth: 1,
    marginRight: 16,
    borderTopColor: '#CCCCCC',
    borderRightColor: '#CCCCCC',
    borderBottomColor: '#CCCCCC',
    borderLeftColor: '#CCCCCC',
    borderRadius: 10,
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Devices;
