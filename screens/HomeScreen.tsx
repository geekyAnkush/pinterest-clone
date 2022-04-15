import { StyleSheet, Image,ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Pin from "../components/Pin";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>  
    <View style={styles.container}>
      <Pin title={'notJust hoodie'} img={"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"} />
      <Pin title={'notJust'} img={"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg"} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius:25,
  }
});
