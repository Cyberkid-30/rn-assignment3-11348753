import React from "react";
import { Image, StyleSheet, View } from "react-native";

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
    width: 120,
    height: 200,
    flexDirection: "column",
    gap: 10,
    borderRadius: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryItems;
