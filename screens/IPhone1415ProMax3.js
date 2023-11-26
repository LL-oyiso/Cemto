import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax3 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax3}
      locations={[0, 1]}
      colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
    >
      <Pressable
        style={[styles.iphone1415ProMax3Child, styles.iphone1415Layout]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      />
      <Text style={styles.welcomeToCemto}>Welcome to Cemto</Text>
      <Pressable
        style={[styles.iphone1415ProMax3Item, styles.iphone1415Layout]}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      />
      <Pressable
        style={[styles.iphone1415ProMax3Inner, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax11")}
      />
      <Image
        style={[styles.phstackThinIcon, styles.phstackThinIconLayout]}
        contentFit="cover"
        source={require("../assets/phstackthin.png")}
      />
      <Image
        style={[styles.arcticonsshopeepay, styles.arcticonsshopeepayPosition]}
        contentFit="cover"
        source={require("../assets/arcticonsshopeepay.png")}
      />
      <Image
        style={[
          styles.streamlinesubscriptionCashflIcon,
          styles.arcticonsshopeepayPosition,
        ]}
        contentFit="cover"
        source={require("../assets/streamlinesubscriptioncashflow.png")}
      />
      <Pressable
        style={styles.liquidityProvider}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Text
          style={[styles.liquidityProvider1, styles.payments1Typo]}
        >{`liquidity
provider`}</Text>
      </Pressable>
      <Pressable
        style={styles.swap}
        onPress={() => navigation.navigate("IPhone1415ProMax11")}
      >
        <Text style={[styles.liquidityProvider1, styles.payments1Typo]}>
          Swap
        </Text>
      </Pressable>
      <Pressable
        style={[styles.payments, styles.paymentsPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Text style={[styles.payments1, styles.payments1Typo]}>Payments</Text>
      </Pressable>
      <Pressable
        style={[styles.stacking, styles.paymentsPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      >
        <Text style={[styles.stacking1, styles.payments1Typo]}>Stacking</Text>
      </Pressable>
      <Image
        style={styles.iconoirhandCash}
        contentFit="cover"
        source={require("../assets/iconoirhandcash.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 196,
    width: 174,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_lgi,
    top: 400,
    position: "absolute",
  },
  rectanglePressableLayout: {
    top: 646,
    height: 196,
    width: 174,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  phstackThinIconLayout: {
    height: 55,
    width: 55,
  },
  arcticonsshopeepayPosition: {
    left: 81,
    position: "absolute",
    overflow: "hidden",
  },
  payments1Typo: {
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  paymentsPosition: {
    left: 276,
    position: "absolute",
  },
  iphone1415ProMax3Child: {
    left: 25,
  },
  welcomeToCemto: {
    top: 130,
    left: 39,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone1415ProMax3Item: {
    left: 230,
  },
  iphone1415ProMax3Inner: {
    left: 228,
  },
  rectanglePressable: {
    left: 25,
  },
  phstackThinIcon: {
    top: 664,
    left: 286,
    position: "absolute",
    overflow: "hidden",
  },
  arcticonsshopeepay: {
    top: 661,
    height: 55,
    width: 55,
  },
  streamlinesubscriptionCashflIcon: {
    top: 426,
    width: 50,
    height: 50,
  },
  liquidityProvider1: {
    color: Color.colorWhite,
    fontWeight: "200",
    fontSize: FontSize.size_xl,
  },
  liquidityProvider: {
    left: 74,
    top: 519,
    position: "absolute",
  },
  swap: {
    left: 83,
    top: 771,
    position: "absolute",
  },
  payments1: {
    width: 98,
    color: Color.colorWhite,
    fontWeight: "200",
    fontSize: FontSize.size_xl,
  },
  payments: {
    top: 526,
  },
  stacking1: {
    color: "#fffcfc",
  },
  stacking: {
    top: 766,
  },
  iconoirhandCash: {
    top: 425,
    left: 291,
    width: 61,
    height: 61,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ProMax3: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.gradientColorGreen,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax3;
