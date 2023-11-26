import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const IPhone1415ProMax8 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone1415ProMax8, styles.iconLayout]}>
      <Text
        style={[styles.stackCzarTo, styles.stackCzarToTypo]}
      >{`Stack cZar to earn interest 
for holding our stable coin. Stacking not only stablises the Appname economy but also provides `}</Text>
      <Text style={styles.appnameMinnigPool}>Appname minnig pool</Text>
      <LinearGradient
        style={[
          styles.iphone1415ProMax8Child,
          styles.stakeUnstakeWrapperLayout,
        ]}
        locations={[0, 1]}
        colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
      />
      <Text style={[styles.appnamePool, styles.textTypo]}>AppName pool</Text>
      <Text style={[styles.stacked142377, styles.stacked142377Typo]}>
        Stacked: 1423,77
      </Text>
      <Text style={[styles.stackingRewards3531, styles.stacked142377Typo]}>
        Stacking rewards: 3531%
      </Text>
      <Text style={[styles.text, styles.textTypo]}> 15233.</Text>
      <View
        style={[styles.stakeUnstakeWrapper, styles.stakeUnstakeWrapperLayout]}
      >
        <Text style={styles.stakeUnstake}>Stake / Unstake + -</Text>
      </View>
      <Pressable
        style={styles.makiarrow}
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
    width: "100%",
    overflow: "hidden",
  },
  stackCzarToTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  stakeUnstakeWrapperLayout: {
    borderRadius: Border.br_4xl,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_4xl,
    top: 479,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  stacked142377Typo: {
    color: Color.gradientText,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  stackCzarTo: {
    top: 247,
    left: 42,
    color: "#a1a1a1",
    width: 345,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  appnameMinnigPool: {
    top: 127,
    fontSize: FontSize.size_17xl,
    width: 310,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 41,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415ProMax8Child: {
    top: 855,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    width: 347,
    height: 407,
    backgroundColor: Color.gradientColorGreen,
    left: 41,
    borderRadius: Border.br_4xl,
  },
  appnamePool: {
    left: 63,
  },
  stacked142377: {
    top: 573,
    left: 63,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  stackingRewards3531: {
    top: 659,
    left: 72,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  text: {
    left: 270,
  },
  stakeUnstake: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  stakeUnstakeWrapper: {
    top: 745,
    left: 69,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 26,
    paddingVertical: 14,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  makiarrow: {
    left: 46,
    top: 86,
    width: 25,
    height: 25,
    position: "absolute",
  },
  iphone1415ProMax8: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax8;
