import { Image } from "expo-image";
import { Button, Dimensions, ScrollView, StyleSheet, View } from "react-native";

export default function Gallery() {
  const images = [
    "https://picsum.photos/id/14/367/267",
    "https://picsum.photos/id/15/367/267",
    "https://picsum.photos/id/17/367/267",
    "https://picsum.photos/id/16/367/267",
    "https://picsum.photos/id/18/367/267",
    "https://picsum.photos/id/20/367/267",
    "https://picsum.photos/id/21/367/267",
    "https://picsum.photos/id/22/367/267",
    "https://picsum.photos/id/24/367/267",
    "https://picsum.photos/id/26/367/267",
    "https://picsum.photos/id/28/367/267",
    "https://picsum.photos/id/27/367/267",
    "https://picsum.photos/id/29/367/267",
    "https://picsum.photos/id/33/367/267",
    "https://picsum.photos/id/34/367/267",
    "https://picsum.photos/id/36/367/267",
    "https://picsum.photos/id/37/367/267",
    "https://picsum.photos/id/39/3456/2304",
    "https://picsum.photos/id/41/367/267",
    "https://picsum.photos/id/43/367/267",
    "https://picsum.photos/id/48/367/267",
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.imageContainer}>
          {images.map((img, index) => (
            <View key={index} style={styles.images}>
              <Image
                source={{ uri: img }}
                style={styles.imageContent}
                contentFit="cover"
              />
            </View>
          ))}
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
const gap = 2;
const numColumns = 3;
const imageWidth = (screenWidth - (gap * (numColumns - 1))) / numColumns;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 1,
  },
  images: {
    width: imageWidth,
    height: imageWidth,
    backgroundColor: "#e0e0e0",
  },
  imageContent: {
    width: "100%",
    height: "100%",
  },
  floatingButtonContainer: {
    position: "absolute",
    width: "40%",
    bottom: 20,
    right: 20,
  },
});
