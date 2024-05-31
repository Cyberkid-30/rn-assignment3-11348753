import { StatusBar } from "expo-status-bar";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Search from "./components/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#f0e2d3",
  },

  textContent: {
    fontSize: 33,
  },
});
