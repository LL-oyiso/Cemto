import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone1415ProMax6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone1415ProMax6, styles.iconLayout]}>
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("IPhone1415ProMax8")}
      >
        <Text style={[styles.continue1, styles.stackingTypo]}>CONTINUE</Text>
      </Pressable>
      <Text style={[styles.stacking, styles.stackingPosition]}>Stacking</Text>
      <Text style={styles.allowsYouTo}>
        Allows you to stack you money in the liquidity pool and allow it gain
        interest over time
      </Text>
      <Image
        style={styles.httpslottiefilescomanimatIcon}
        contentFit="cover"
        source={require("../assets/httpslottiefilescomanimationsstackro6qfwlhbh.png")}
      />
      <Pressable
        style={[styles.makiarrow, styles.stackingPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/makiarrow.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  stackingTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  stackingPosition: {
    left: 40,
    position: "absolute",
  },
  continue1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  continue: {
    left: 256,
    top: 855,
    position: "absolute",
  },
  stacking: {
    top: 171,
    fontSize: FontSize.size_17xl,
    width: 390,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  allowsYouTo: {
    top: 270,
    left: 36,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 345,
    textAlign: "left",
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    top: 328,
    left: 0,
    width: 500,
    height: 500,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  makiarrow: {
    top: 89,
    width: 25,
    height: 25,
  },
  iphone1415ProMax6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
  },
});

export default IPhone1415ProMax6;
