import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const CategoryItems = ({ title, tasks, imgURL }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{tasks}</Text>
      </View>
      <Image style={styles.img} source={imgURL} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 230,
    padding: 20,
    flexDirection: "column",
    gap: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryItems;
