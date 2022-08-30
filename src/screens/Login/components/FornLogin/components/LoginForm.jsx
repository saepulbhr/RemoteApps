import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icons from "react-native-vector-icons/Ionicons";

function LoginForm(props) {
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  const onChangUsername = (data) => setPayload({ ...payload, username: data });
  const onChangePassword = (data) => setPayload({ ...payload, password: data });
  const onVisible = () => setVisible(!visible);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            label="username"
            value={payload.username}
            onChangeText={onChangUsername}
            dense={true}
            mode="outlined"
            right={<TextInput.Icon name={() => <Icons name="people" size={21} />} />}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            label="Password"
            mode="outlined"
            right={
              <TextInput.Icon
                name={visible ? "eye" : "eye-off"}
                onPress={onVisible}
                // color={visible ? colors.primary : colors.error}
              />
            }
            onChangeText={onChangePassword}
            secureTextEntry={visible ? false : true}
          />
        </View>
        <View style={styles.containerButton}>
          <Button mode="contained">Masuk</Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 0.5,
    display: "flex",
    paddingLeft: 16,
    paddingRight: 16,
  },
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
  containerInput: {
    marginTop: 6,
    marginBottom: 6,
  },
  containerButton: {
    marginTop: 16,
    marginBottom: 16,
  },
});

export default LoginForm;
