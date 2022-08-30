import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routers from './src/router';
import DashboardScreen from './src/screens/Dashboard';
import StatusBarScreen from './src/screens/StatusBar';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <StatusBarScreen />
      <PaperProvider>
        <Routers />
      </PaperProvider>
      {/* <DashboardScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
