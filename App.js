import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Routers from './src/router';
import StatusBarScreen from './src/screens/StatusBar';
import Store from './src/store/store';
import { theme } from './src/common/theme';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <StatusBarScreen />
      <PaperProvider theme={theme}>
        <Store>
          <Routers />
        </Store>
      </PaperProvider>
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
