import { Button, Dimensions, ScrollView, StyleSheet, View } from "react-native";

export default function Gallery() {
  return (
    <View style={{ flex: 1 }}>
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

      <View style={styles.floatingButtonContainer}>
        <Button
          title="Alert"
          onPress={() => alert("Alert Button Pressed")}
          color="#0095f6"
        />
      </View>
    </View>
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
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#0095f6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 999,
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
});
>>>>>>>>> Temporary merge branch 2
