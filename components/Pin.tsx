import { View, Text, StyleSheet,Image,Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState,useEffect } from 'react';

const Pin = ({title,img}) => {
  const onLike = ()=>{}

  const [ratio,setRatio] = useState(1);

  useEffect(()=>{
    if(img){
      Image.getSize(img,(w,h)=>{
        setRatio(w/h);
      })
    }
  },[img])
  return (
    <View style={styles.pin}>
        <View>
          <Image
          source={{
            uri: img
          }}
          style={[styles.image,{aspectRatio:ratio}]}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
        </View>
        <Text style={styles.title}>{title}</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  image: {
    width: "100%",
    borderRadius:25,
  },
  pin:{
    width:'100%',
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