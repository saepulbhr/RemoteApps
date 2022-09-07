import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Surface, useTheme } from 'react-native-paper';
import RNSpeedometer from 'react-native-speedometer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreContext from '../../../store/context';

function Infromation(props) {
  const usedContext = useContext(StoreContext);
  const { payload } = props;
  const { speed } = usedContext;
  const theme = useTheme();
  return (
    <View style={styles.root}>
      <View style={styles.containerIcon}>
        <Icons name={props.currentIcon} size={100} style={{color:theme.colors.primary}} />
      </View>
      {/* <View style={styles.containerInformation}>
        <View style={styles.containerButton}>
          <TouchableOpacity style={{ elevation: 6 }}>
            <Surface style={styles.surface} elevation={3}>
              <RNSpeedometer value={30} size={40} />
              <Text style={[styles.speed, { color: theme.colors.primary }]}>
                {speed}%
              </Text>
              <Text style={{textAlign:'center'}}>kecepatan saat ini</Text>
            </Surface>
          </TouchableOpacity>
        </View>

        <View style={styles.cardInformation}>
          <Surface style={styles.surfaceInformation} elevation={4}>
            <Text style={[styles.status,{color:'#1B365C'}]}>Status </Text>
            <Text>koneksi </Text>
          </Surface>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  containerIcon: {
    flex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInformation: {
    flex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  containerButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 16,
  },
  btnSpeed: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
  cardInformation: {
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 6,
  },
  speed: {
    fontWeight: '700',
    fontSize:16
  },
  surface: {
    padding: 8,
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  surfaceInformation: {
    padding: 8,
    height: 100,
    width: '100%',
    backgroundColor: '#B1E1FF',
  },
  status: {
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.8,
  },
});

export default Infromation;
