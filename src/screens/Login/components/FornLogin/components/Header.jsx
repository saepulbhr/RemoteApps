import React from "react";
import { Image, StyleSheet, View } from "react-native";

function Header(props) {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          source={require("../../../../../common/icons/login-apps.png")}
          resizeMode={"center"}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 0.5,
    display: "flex",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
});

export default Header;
