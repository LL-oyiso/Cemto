import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FrameIcon from "../components/FrameIcon";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax4 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone1415ProMax4}
      locations={[0, 1]}
      colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
    >
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.get2In, styles.get2InPosition]}>
          GET 2% IN DAILY CASH BACK REWARDS
        </Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <Pressable
          style={styles.continue}
          onPress={() => navigation.navigate("IPhone1415ProMax10")}
        >
          <Text style={[styles.continue1, styles.get2InTypo]}>CONTINUE</Text>
        </Pressable>
      </View>
      <FrameIcon />
      <View style={[styles.frame2, styles.frame2Layout]}>
        <Text style={[styles.makeTransactionsUsing, styles.get2InPosition]}>
          {" "}
          Make transactions using Cemot, is convient as we employ NFC technology
          to facilitate payments and customers will earn rewards for every
          transaction.
        </Text>
        <Image
          style={[styles.httpslottiefilescomanimatIcon, styles.frame2Layout]}
          contentFit="cover"
          source={require("../assets/httpslottiefilescomanimationsnfccardreadmqokas8enf.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: -103,
    overflow: "hidden",
  },
  get2InPosition: {
    color: Color.colorWhite,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  get2InTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  frame2Layout: {
    width: 500,
    position: "absolute",
  },
  get2In: {
    left: 143,
    fontSize: FontSize.size_13xl,
    width: 390,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  frame: {
    top: 171,
    width: 533,
    height: 78,
    position: "absolute",
    left: -103,
  },
  continue1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  continue: {
    left: 359,
    top: 0,
    position: "absolute",
  },
  frame1: {
    top: 855,
    width: 466,
    height: 24,
    position: "absolute",
    left: -103,
  },
  makeTransactionsUsing: {
    left: 140,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 312,
    textAlign: "left",
  },
  httpslottiefilescomanimatIcon: {
    top: 168,
    left: 103,
    height: 364,
  },
  frame2: {
    top: 298,
    height: 532,
    left: -103,
    overflow: "hidden",
  },
  iphone1415ProMax4: {
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.gradientColorGreen,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax4;
