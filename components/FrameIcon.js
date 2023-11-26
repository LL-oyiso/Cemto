import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const FrameIcon = () => {
  return (
    <Image
      style={styles.frameIcon}
      contentFit="cover"
      source={require("../assets/frame.png")}
    />
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "absolute",
    top: 89,
    left: 0,
    width: 168,
    height: 25,
    overflow: "hidden",
  },
});

export default FrameIcon;
