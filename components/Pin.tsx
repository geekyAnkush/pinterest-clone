import { View, Text, StyleSheet,Image,Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState,useEffect } from 'react';

const Pin = ({pin}) => {
  const onLike = ()=>{}

  const [ratio,setRatio] = useState(1);

  useEffect(()=>{
    if(pin.image){
      Image.getSize(pin.image,(w,h)=>{
        setRatio(w/h);
      })
    }
  },[pin.image])
  return (
    <View style={styles.pin}>
        <View>
          <Image
          source={{
            uri: pin.image
          }}
          style={[styles.image,{aspectRatio:ratio}]}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={20} color="black" />
        </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={2}>{pin.title}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:10
  },
  title: {
    fontSize: 16,
    lineHeight:22,
    fontWeight: "700",
    margin: 5,
    color:"#181818"
  },
  image: {
    width: "100%",
    borderRadius:15,
  },
  pin:{
    width:'100%',
    padding:5
  },
  heartBtn:{
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom:10,
    right:10,
    padding:8,
    borderRadius:50,
  }

});

export default Pin;