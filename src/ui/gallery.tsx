import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

export default function Gallery() {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
        <View style={styles.images}></View>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;
const imageWidth = screenWidth / 3;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  images: {
    width: imageWidth,
    height: imageWidth,
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "black",
  },
});
