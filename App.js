import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Search from "./components/Search";
import OngoingTasks from "./components/OngoingTasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Categories />
      <OngoingTasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#f0e2d3",
  },

  textContent: {
    fontSize: 33,
  },
});
