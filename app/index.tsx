import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../src/ui/avatar";
import Header from "../src/ui/header";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Avatar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
