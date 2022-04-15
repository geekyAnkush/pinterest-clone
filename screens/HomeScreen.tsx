import { StyleSheet, Image,ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Pin from "../components/Pin";
import pins from "../assets/data/pins";
export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>  
    <View style={styles.container}>
      <View style={styles.column}>
        {pins.filter((_,index)=>index%2==0).map((pin,index)=>(
          <Pin key={index} pin={pin}/>
        ))}
      </View>
      <View style={styles.column}>
         {pins.filter((_,index)=>index%2!=0).map((pin,index)=>(
          <Pin key={index} pin={pin}/>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection:'row',
  },
  column:{
    flex:1,
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
