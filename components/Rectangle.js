import * as React from "react";
import { StyleSheet, View } from "react-native";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#d9d9d9",
    width: 84,
    height: 80,
  },
});

export default Rectangle;
