import React from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.input} placeholder={"Search"} />
      <Image source={require("../assets/images/Group2.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  input: {
    width: 265,
    paddingLeft: 15,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default Search;
