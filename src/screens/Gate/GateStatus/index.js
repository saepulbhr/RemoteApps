import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StoreContext from "../../../store/context";

function GateStatus(props) {
  const usedContexct = useContext(StoreContext);
  const { status } = usedContexct;
  return (
    <View style={styles.root}>
      {status ? (
        <Icon name="wifi" color="green" size={16} />
      ) : (
        <Icon name="wifi-off" color="red" size={16} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingRight: 16,
    paddingLeft: 16,
  },
});

export default GateStatus;
