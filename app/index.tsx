import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../src/ui/avatar";
import Gallery from "../src/ui/gallery";
import Header from "../src/ui/header";
import MenuBar from "../src/ui/menubar";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Avatar />
      <Gallery />
      <MenuBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
