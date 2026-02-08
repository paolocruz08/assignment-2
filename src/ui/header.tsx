import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.arrowIcon}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.logo}>Group Profile</Text>
        <Text style={styles.logoSub}>ootd_everyday</Text>
      </View>
      <View style={styles.headerIcons}>
        <Octicons name="diff-added" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 7,
  },

  nameContainer: {
    alignItems: "center",
    marginBottom: -5,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "comic-sans",
  },

  logoSub: {
    opacity: 0.5,
    lineHeight: 15,
  },

  headerIcons: {
    flexDirection: "row",
    gap: 20,
  },

  icon: {
    marginRight: 0,
  },
});
