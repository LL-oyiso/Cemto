import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax13 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone1415ProMax13, styles.iconLayout]}>
      <Pressable
        style={[styles.makiarrow, styles.makiarrowPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/makiarrow.png")}
        />
      </Pressable>
      <LinearGradient
        style={[styles.iphone1415ProMax13Child, styles.makiarrowPosition]}
        locations={[0, 1]}
        colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
      />
      <Text style={[styles.gasFeesContainer, styles.withdrawFlexBox]}>
        <Text style={styles.gasFees}>Gas fees</Text>
        <Text
          style={styles.selectTypo2}
        >{`                                    --
`}</Text>
        <Text style={styles.gasFees}>Swap fees</Text>
        <Text style={styles.selectTypo2}> --</Text>
      </Text>
      <View style={[styles.iphone1415ProMax13Item, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415ProMax13Inner, styles.iphone1415Layout]} />
      <Image
        style={styles.riswapLineIcon}
        contentFit="cover"
        source={require("../assets/riswapline.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.iphone1415ProMax13Child1, styles.rectangleViewLayout]}
      />
      <Text style={[styles.withdraw, styles.swapTypo]}>Withdraw</Text>
      <Text style={[styles.stake, styles.selectClr]}>Stake</Text>
      <Image
        style={[
          styles.materialSymbolsLightarrowDIcon,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolslightarrowdropdownrounded.png")}
      />
      <Image
        style={[
          styles.materialSymbolsLightarrowDIcon1,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolslightarrowdropdownrounded.png")}
      />
      <Text style={[styles.selectCrypto, styles.informationPosition]}>
        Select crypto
      </Text>
      <View style={[styles.information, styles.informationPosition]}>
        <Text style={[styles.selectCrypto1, styles.selectClr]}>
          Select crypto
        </Text>
      </View>
      <Text style={[styles.swap, styles.selectClr]}>Swap</Text>
      <Image
        style={styles.lucidesettings2Icon}
        contentFit="cover"
        source={require("../assets/lucidesettings2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  makiarrowPosition: {
    left: 36,
    position: "absolute",
  },
  withdrawFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  iphone1415Layout: {
    height: 63,
    width: 314,
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleViewLayout: {
    height: 44,
    width: 251,
    borderRadius: Border.br_lgi,
    left: 93,
    position: "absolute",
  },
  swapTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  selectClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  materialIconLayout: {
    height: 34,
    width: 34,
    left: 310,
    position: "absolute",
    overflow: "hidden",
  },
  informationPosition: {
    left: 89,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  makiarrow: {
    top: 74,
    width: 25,
    height: 25,
  },
  iphone1415ProMax13Child: {
    top: 215,
    borderRadius: Border.br_14xl,
    width: 361,
    height: 472,
    backgroundColor: Color.gradientColorGreen,
  },
  gasFees: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  selectTypo2: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  gasFeesContainer: {
    top: 601,
    left: 82,
    fontSize: FontSize.size_base,
    letterSpacing: 0.8,
    width: 280,
    position: "absolute",
  },
  iphone1415ProMax13Item: {
    top: 302,
    left: 58,
  },
  iphone1415ProMax13Inner: {
    top: 492,
    left: 62,
  },
  riswapLineIcon: {
    top: 396,
    left: 188,
    width: 66,
    height: 66,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 751,
    backgroundColor: Color.colorBlack,
  },
  iphone1415ProMax13Child1: {
    top: 811,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
  },
  withdraw: {
    top: 761,
    left: 159,
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  stake: {
    top: 821,
    left: 181,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
  },
  materialSymbolsLightarrowDIcon: {
    top: 317,
  },
  materialSymbolsLightarrowDIcon1: {
    top: 509,
  },
  selectCrypto: {
    top: 512,
    color: Color.colorBlack,
    textAlign: "left",
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  selectCrypto1: {
    letterSpacing: 1,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  information: {
    top: 322,
    width: 171,
    flexDirection: "row",
    alignItems: "center",
  },
  swap: {
    top: 129,
    left: 49,
    fontSize: FontSize.size_13xl,
    width: 360,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  lucidesettings2Icon: {
    top: 232,
    left: 341,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ProMax13: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax13;
