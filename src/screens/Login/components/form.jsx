import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Text, TextInput } from "react-native-paper";
import Buttons from "../../../components/button";
import TextField from "../../../components/textinput";
import { useTheme } from "react-native-paper";
import AuthContext from "../../../context/auth/auth-context";

const FormLogin = () => {
  const authContext = useContext(AuthContext);
  const { handleLogin } = authContext;
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ username: "", password: "" });

  const handleChangeUser = (e) => setData({ ...data, username: e });
  const handleChangePassword = (e) => setData({ ...data, password: e });

  const onVisible = () => setVisible(!visible);

  const handleSubmit = () => {
    handleLogin({ username: data.username, password: data.password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitile}>
        <Headline style={styles.headline}>DRTM</Headline>
        <Text style={{ letterSpacing: 0.9 }}>
          Data Realtime Transaction Monitoring
        </Text>
      </View>

      <View style={styles.containerForm}>
        <View style={styles.input}>
          <TextField
            mode="outlined"
            placeholder="username"
            onChange={handleChangeUser}
            iconRight={<TextInput.Icon name="account" color="grey" size={30} />}
          />
        </View>
        <View style={styles.input}>
          <TextField
            mode="outlined"
            placeholder="username"
            onChange={handleChangePassword}
            iconRight={
              <TextInput.Icon
                name={visible ? "eye" : "eye-off"}
                onPress={onVisible}
                color={visible ? "#FF3D3D" : colors.primary}
              />
            }
            password={visible}
          />
        </View>
        <View style={styles.input}>
          <Buttons
            title="login"
            style={{ padding: 4, marginTop: 5, borderRadius: 50 }}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 370,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 5,
    top: 50,
  },
  containerTitile: {
    display: "flex",
    padding: 5,
    alignItems: "center",
    marginTop: 20,
  },
  containerForm: {
    padding: 16,
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
  },
  headline: {
    fontWeight: "700",
    fontStyle: "italic",
  },
});

export default FormLogin;
