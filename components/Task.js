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
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "orange",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Task;
