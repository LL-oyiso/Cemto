import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax11 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax11}
      locations={[0, 1]}
      colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
    >
      <Text style={[styles.makeASwap, styles.makeASwapPosition]}>
        Make a swap in an instant
      </Text>
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("IPhone1415ProMax13")}
      >
        <Text style={styles.continue1}>CONTINUE</Text>
      </Pressable>
      <Image
        style={[styles.makiarrowIcon, styles.makiarrowLayout]}
        contentFit="cover"
        source={require("../assets/makiarrow.png")}
      />
      <Image
        style={[styles.makiarrowIcon, styles.makiarrowLayout]}
        contentFit="cover"
        source={require("../assets/makiarrow.png")}
      />
      <Pressable
        style={[styles.makiarrow, styles.makiarrowLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      />
      <Text style={[styles.swappingIsA, styles.makeASwapPosition]}>
        Swapping is a direct trade between different digital currencies without
        involving a middleman like a bank and is a quick and secure transaction
        on the blockchain
      </Text>
      <Image
        style={styles.httpslottiefilescomanimatIcon}
        contentFit="cover"
        source={require("../assets/httpslottiefilescomanimationscadena05wnbsl7lw.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  makeASwapPosition: {
    width: 360,
    color: Color.colorWhite,
    left: 39,
    textAlign: "left",
    position: "absolute",
  },
  makiarrowLayout: {
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  makeASwap: {
    top: 135,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    width: 360,
    color: Color.colorWhite,
    left: 39,
  },
  continue1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  continue: {
    left: 271,
    top: 854,
    position: "absolute",
  },
  makiarrowIcon: {
    top: 88,
    left: 55,
  },
  makiarrow: {
    top: 114,
    left: 80,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  swappingIsA: {
    top: 277,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    width: 360,
    color: Color.colorWhite,
    left: 39,
  },
  httpslottiefilescomanimatIcon: {
    top: 515,
    left: 59,
    width: 325,
    height: 255,
    position: "absolute",
  },
  iphone1415ProMax11: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.gradientColorGreen,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax11;
