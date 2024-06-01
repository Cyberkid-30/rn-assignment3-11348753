import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#FBF9F7",
    borderWidth: 1,
    borderColor: "#E8D1BA",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Task;
