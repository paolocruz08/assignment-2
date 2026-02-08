import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

export default function AvatarTab() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarTab}>
        <FontAwesome name="user-circle-o" size={115} color="black" />

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>54</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Admins</Text>
          </View>
        </View>
      </View>

      <View style={styles.profileDescription}>
        <Text style={styles.profileName}>OOTD Everyday</Text>
        <Text style={styles.bio}>Fit Check! 🎽</Text>
        <Text style={styles.bio}>You know we'll hype you up.</Text>
      </View>

      <View style={styles.memberButton}>
        <Text style={styles.memberText}>Member ▼</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  avatarTab: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 5,
  },

  statItem: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 15,
    color: "#666",
  },

  profileDescription: {},

  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },

  bio: {
    fontSize: 15,
    lineHeight: 18,
  },

  memberButton: {
    padding: 7,
    marginTop: 15,
    marginBottom: 2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.2)",
    width: "100%",
  },

  memberText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  }
});
