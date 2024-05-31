import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CategoryItems from "./CategoryItems";

const Categories = () => {
  const Category = [
    {
      title: "Exercise",
      tasks: "12 tasks",
      img: require("../assets/images/CategoriesCard.jpg"),
    },
    {
      title: "Study",
      tasks: "12 tasks",
      img: require("../assets/images/woman.png"),
    },
  ];

  return (
    <View>
      <Text style={styles.categoryText}>Categories</Text>
      <ScrollView>
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
  },
});

export default Categories;
