import { Entypo, Feather } from "@expo/vector-icons";
import { StyleSheet, Image, ScrollView } from "react-native";
import pins from "../assets/data/pins";

import EditScreenInfo from "../components/EditScreenInfo";
import MasonryList from "../components/MasonryList";
import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.about}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Image
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C5603AQEjXDwpQe0KtQ/profile-displayphoto-shrink_200_200/0/1612114881647?e=1655337600&v=beta&t=HNPWP0aKhwiN_8AhA0x0NtK4ooWC5uWXEnl40f7n-qg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Kumar Ankush</Text>
        <Text style={styles.subtitle}>534 Followers | 123 Followings</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 100,
    marginVertical: 10,
  },
  subtitle: {
    color: "#181818",
    fontWeight: "600",
    marginBottom: 20,
  },
  about: {
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
