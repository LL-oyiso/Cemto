import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax14 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax14}
      locations={[0, 1]}
      colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
    >
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
        style={[styles.makiarrow, styles.makiarrowTransform]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <View style={[styles.makiarrowChild, styles.makiarrowTransform]} />
      </Pressable>
      <View style={styles.iphone1415ProMax14Child} />
      <Text style={styles.becomeALiquidity}>Become a liquidity provider</Text>
      <Text style={styles.lockLiquidity}>Lock liquidity</Text>
      <Text style={styles.selectedNetwork}>Selected network</Text>
      <Text style={styles.lockLiquidityOn}>Lock liquidity on exchange</Text>
      <View style={[styles.iphone1415ProMax14Item, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415ProMax14Inner, styles.iphone1415Layout]} />
      <Text style={[styles.celo, styles.celoTypo]}>{`Celo `}</Text>
      <Text style={[styles.nativeSwap, styles.celoTypo]}>Native swap</Text>
      <Image
        style={styles.materialSymbolsLightarrowDIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolslightarrowdropdownrounded.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  makiarrowLayout: {
    height: 25,
    width: 25,
  },
  makiarrowTransform: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415Layout: {
    height: 33,
    width: 301,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  celoTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    width: 217,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  makiarrowIcon: {
    top: 88,
    left: 55,
    position: "absolute",
    overflow: "hidden",
  },
  makiarrowChild: {
    top: 66,
    left: 69,
    width: 100,
    height: 100,
  },
  makiarrow: {
    top: 114,
    left: 80,
    height: 25,
    width: 25,
  },
  iphone1415ProMax14Child: {
    top: 215,
    left: 24,
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
    width: 381,
    height: 494,
    position: "absolute",
  },
  becomeALiquidity: {
    top: 255,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 53,
    position: "absolute",
  },
  lockLiquidity: {
    top: 325,
    fontSize: FontSize.size_4xl,
    letterSpacing: 2.5,
    color: "#8d8d8d",
    width: 200,
    left: 56,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  selectedNetwork: {
    top: 393,
    width: 217,
    fontSize: FontSize.size_base,
    left: 56,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  lockLiquidityOn: {
    top: 524,
    left: 57,
    color: Color.colorDarkgray_100,
    width: 267,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  iphone1415ProMax14Item: {
    top: 424,
    left: 53,
    height: 33,
    width: 301,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
  },
  iphone1415ProMax14Inner: {
    top: 554,
    left: 55,
  },
  celo: {
    top: 426,
    left: 65,
  },
  nativeSwap: {
    top: 559,
    left: 68,
  },
  materialSymbolsLightarrowDIcon: {
    top: 423,
    left: 320,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ProMax14: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.gradientColorGreen,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax14;
