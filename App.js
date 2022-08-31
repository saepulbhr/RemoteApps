import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import Routers from "./src/router"; 
import StatusBarScreen from "./src/screens/StatusBar";
import Store from "./src/store/store";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4951EC',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3'
    },
  };
  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
