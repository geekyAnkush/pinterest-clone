import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Pin from "./Pin";

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}

const MasonryList = ({ pins }: IMasonryList) => {
  const width = useWindowDimensions().width;
  const numCols = Math.ceil(width / 350);

  return (
    <ScrollView contentContainerStyle={{ width: "100%" }}>
      <View style={styles.container}>
        {Array.from(Array(numCols)).map((col, idx) => (
          <View style={styles.column} key={idx}>
            {pins
              .filter((_, index) => index % numCols === idx)
              .map((pin, index) => (
                <Pin key={index} pin={pin} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 25,
  },
});

export default MasonryList;
