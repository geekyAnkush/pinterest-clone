import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CreatePinScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const submit = () => {};

  return (
    <View style={styles.root}>
      <Button title="Upload your pin" onPress={pickImage} />
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <TextInput
            placeholder="Title..."
            style={[styles.input, { marginBottom: 20 }]}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <View style={styles.btnView}>
            <Button title="Submit" onPress={submit} />
            <Button
              title="Cancel"
              onPress={() => {
                setImage(null);
                setTitle("");
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    width: "100%",
    borderRadius: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginVertical: 10,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
