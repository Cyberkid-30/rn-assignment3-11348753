import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CategoryItems from "./CategoryItems";
import Category from "../CategoryItemsList";

const Categories = () => {
  return (
    <View>
      <Text style={styles.categoryText}>Categories</Text>
      <ScrollView
        horizontal
        style={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {Category.map((item) => (
          <CategoryItems
            title={item.title}
            tasks={item.tasks}
            imgURL={item.img}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: "row",
  },

  contentContainer: {
    justifyContent: "space-evenly",
  },
});

export default Categories;
