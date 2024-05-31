import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.heading}>Hello, Devs</Text>
        <Text>14 tasks today</Text>
      </View>
      <Image
        style={styles.personIcon}
        source={require("../assets/images/person.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    widhth: "100%",
    paddingVertical: 20,
    // backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },

  personIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default Header;
