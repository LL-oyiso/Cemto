import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax10 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax10}
      locations={[0, 1]}
      colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
    >
      <Text style={[styles.makePeer2, styles.makePeer2Position]}>
        Make Peer 2 Peer payements
      </Text>
      <Text style={[styles.secureAndFastContainer, styles.makePeer2Position]}>
        <Text
          style={styles.secureAndFast}
        >{`Secure and fast transactions between friends or family.

No fees for transferring funds between users on our platform.

Convenient split bills, pay back loans, or share expenses hassle-free`}</Text>
        <Text style={styles.text}>.</Text>
      </Text>
      <Image
        style={styles.httpslottiefilescomanimatIcon}
        contentFit="cover"
        source={require("../assets/httpslottiefilescomanimationspaynowpaidw3dzb4gj3p.png")}
      />
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("IPhone1415ProMax9")}
      >
        <Text style={[styles.continue1, styles.makePeer2Typo]}>CONTINUE</Text>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  makePeer2Position: {
    color: Color.colorWhite,
    left: 57,
    textAlign: "left",
    position: "absolute",
  },
  makePeer2Typo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  makiarrowLayout: {
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  makePeer2: {
    top: 170,
    fontSize: FontSize.size_13xl,
    width: 390,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  secureAndFast: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  text: {
    fontFamily: FontFamily.interRegular,
  },
  secureAndFastContainer: {
    top: 305,
    fontSize: FontSize.size_5xl,
    width: 345,
    textAlign: "left",
  },
  httpslottiefilescomanimatIcon: {
    top: 540,
    left: 0,
    width: 500,
    height: 375,
    position: "absolute",
  },
  continue1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
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
  iphone1415ProMax10: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.gradientColorGreen,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax10;
