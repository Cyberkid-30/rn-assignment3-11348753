import React from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import Task from "./Task";

const OngoingTasks = () => {
  const Tasks = [
    { id: 1, task: "Mobile App Development" },
    { id: 2, task: "Web Development" },
    { id: 3, task: "Push Ups" },
    { id: 4, task: "Make pancakes" },
    { id: 5, task: "Meditate for 15 minutes." },
    { id: 6, task: "Play COD" },
    { id: 7, task: "Do my homework." },
    { id: 8, task: "Family time" },
    { id: 9, task: "Crunches" },
    { id: 10, task: "Study Physics" },
    { id: 11, task: "Mobile App Development" },
    { id: 12, task: "Make cakes" },
    { id: 13, task: "Meditate" },
    { id: 14, task: "Play GTA" },
    { id: 15, task: "Family time" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Ongoing Tasks </Text>
      <FlatList
        data={Tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task task={item.task} />}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 50,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  flatList: {
    height: 500,
    paddingBottom: 30,
  },
});

export default OngoingTasks;
