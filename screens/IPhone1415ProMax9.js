import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax9 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone1415ProMax9, styles.iconLayout1]}>
      <LinearGradient
        style={[styles.iphone1415ProMax9Child, styles.newWrapperBg]}
        locations={[0, 1]}
        colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
      />
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>3827 **** **** 9876</Text>
      </View>
      <View style={[styles.information, styles.wrapperFlexBox]}>
        <View>
          <Text style={[styles.cardHolderName1, styles.expiryDate1Typo]}>
            Card Holder name
          </Text>
          <Text style={[styles.sphaMbongwe, styles.text1Typo]}>
            Spha Mbongwe
          </Text>
        </View>
        <View style={styles.expiryDate}>
          <Text style={[styles.expiryDate1, styles.expiryDate1Typo]}>
            Expiry date
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>02/30</Text>
        </View>
      </View>
      <Image
        style={styles.lucidenfcIcon}
        contentFit="cover"
        source={require("../assets/lucidenfc.png")}
      />
      <View style={[styles.iphone1415ProMax9Item, styles.sendPosition]} />
      <View
        style={[styles.iphone1415ProMax9Inner, styles.iphone1415ChildLayout1]}
      />
      <View style={styles.uiwpayParent}>
        <Image
          style={styles.gameLayout}
          contentFit="cover"
          source={require("../assets/uiwpay.png")}
        />
        <Text style={[styles.pay, styles.payClr]}>Pay</Text>
      </View>
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout1]} />
      <View style={[styles.frameView, styles.frameViewPosition]} />
      <Image
        style={[styles.gameIconsreceiveMoney, styles.frameViewPosition]}
        contentFit="cover"
        source={require("../assets/gameiconsreceivemoney.png")}
      />
      <Text style={[styles.receive, styles.payClr]}>Receive</Text>
      <View
        style={[styles.iphone1415ProMax9Child1, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415ProMax9Child2, styles.iphone1415ChildLayout1]}
      />
      <View style={[styles.depositWithdrawParent, styles.parentLayout]}>
        <Text style={[styles.depositWithdraw, styles.payClr]}>{`Deposit
Withdraw`}</Text>
        <Image
          style={styles.vaadinmoneyWithdrawIcon}
          contentFit="cover"
          source={require("../assets/vaadinmoneywithdraw.png")}
        />
      </View>
      <View style={[styles.gameIconsreceiveMoneyParent, styles.parentLayout]}>
        <Image
          style={[styles.gameIconsreceiveMoney1, styles.gameLayout]}
          contentFit="cover"
          source={require("../assets/gameiconsreceivemoney1.png")}
        />
        <Text style={[styles.send, styles.payClr]}>Send</Text>
      </View>
      <Text style={[styles.transactions, styles.payClr]}>Transactions</Text>
      <Text style={[styles.senzosSpaza, styles.newTypo]}>Senzo’s spaza</Text>
      <Text style={[styles.phumlani, styles.newTypo]}>Phumlani</Text>
      <Text style={[styles.charlieman, styles.newTypo]}>Charlieman</Text>
      <Text style={[styles.am, styles.amTypo]}>09:13 AM</Text>
      <Text style={[styles.pm, styles.amTypo]}>14:10 PM</Text>
      <Text style={[styles.oct2023, styles.amTypo]}>28 Oct 2023</Text>
      <Text style={[styles.viewAll, styles.textTypo]}>View all</Text>
      <LinearGradient
        style={[styles.newWrapper, styles.newWrapperBg]}
        locations={[0, 1]}
        colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
      >
        <Text style={[styles.new, styles.newTypo]}>4 new</Text>
      </LinearGradient>
      <Image
        style={[styles.ellipseIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Child3, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax9Child4, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.biglobeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/biglobe.png")}
      />
      <Text style={[styles.czar53, styles.czarTypo]}>- cZar53</Text>
      <Text style={[styles.czarR70, styles.czarTypo]}>-cZar R70</Text>
      <Text style={[styles.czar130, styles.czarTypo]}>+cZar 130</Text>
      <Image
        style={[styles.bicashCoinIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bicashcoin.png")}
      />
      <Pressable
        style={styles.makiarrow}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/makiarrow.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  newWrapperBg: {
    backgroundColor: Color.gradientColorGreen,
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
  },
  expiryDate1Typo: {
    height: 10,
    lineHeight: 10,
    letterSpacing: 0.6,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
  },
  text1Typo: {
    fontWeight: "700",
    letterSpacing: 0.7,
    fontSize: 17,
    height: 10,
    lineHeight: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.sourceSansPro,
  },
  sendPosition: {
    left: 0,
    position: "absolute",
  },
  iphone1415ChildLayout1: {
    height: 70,
    width: 75,
    borderRadius: Border.br_sm,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  payClr: {
    color: Color.colorBlack,
    lineHeight: 18,
  },
  frameViewPosition: {
    top: 458,
    position: "absolute",
  },
  parentLayout: {
    height: 48,
    width: 37,
    position: "absolute",
  },
  gameLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  newTypo: {
    letterSpacing: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    position: "absolute",
  },
  amTypo: {
    letterSpacing: 1.8,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 18,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 50,
    width: 51,
    left: 29,
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    width: 22,
    left: 44,
    position: "absolute",
    overflow: "hidden",
  },
  czarTypo: {
    letterSpacing: 2.8,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    lineHeight: 18,
    position: "absolute",
  },
  iphone1415ProMax9Child: {
    top: 135,
    left: 25,
    borderRadius: 19,
    width: 374,
    height: 226,
  },
  text: {
    fontSize: 22,
    letterSpacing: 0.8,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 18,
  },
  wrapper: {
    top: 169,
    left: 43,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  cardHolderName1: {
    width: 141,
    fontSize: FontSize.size_base,
    lineHeight: 10,
  },
  sphaMbongwe: {
    width: 130,
    marginTop: 17,
  },
  expiryDate1: {
    fontSize: 15,
    width: 82,
  },
  text1: {
    width: 47,
    marginTop: 16,
  },
  expiryDate: {
    marginLeft: 95,
  },
  information: {
    top: 303,
    left: 53,
    width: 318,
    alignItems: "center",
  },
  lucidenfcIcon: {
    top: 178,
    left: 326,
    width: 27,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415ProMax9Item: {
    top: 411,
    backgroundColor: "rgba(217, 217, 217, 0.13)",
    width: 430,
    height: 140,
  },
  iphone1415ProMax9Inner: {
    left: 22,
    top: 442,
    width: 75,
    borderRadius: Border.br_sm,
  },
  pay: {
    marginTop: 9,
    letterSpacing: 0.6,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
  },
  uiwpayParent: {
    left: 46,
    top: 457,
    alignItems: "center",
    position: "absolute",
  },
  rectangleView: {
    left: 124,
    top: 442,
    width: 75,
    borderRadius: Border.br_sm,
  },
  frameView: {
    left: 127,
    alignItems: "center",
  },
  gameIconsreceiveMoney: {
    left: 152,
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  receive: {
    top: 487,
    left: 133,
    letterSpacing: 0.6,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    position: "absolute",
  },
  iphone1415ProMax9Child1: {
    left: 223,
    top: 442,
    width: 75,
    borderRadius: Border.br_sm,
  },
  iphone1415ProMax9Child2: {
    top: 441,
    left: 327,
  },
  depositWithdraw: {
    top: 18,
    left: -8,
    fontSize: 12,
    letterSpacing: 0.5,
    textAlign: "center",
    width: 54,
    height: 30,
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  vaadinmoneyWithdrawIcon: {
    top: -5,
    left: 11,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  depositWithdrawParent: {
    top: 456,
    left: 346,
  },
  gameIconsreceiveMoney1: {
    top: 0,
    left: 9,
    position: "absolute",
  },
  send: {
    top: 29,
    left: 0,
    position: "absolute",
    letterSpacing: 0.6,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
  },
  gameIconsreceiveMoneyParent: {
    left: 242,
    top: 457,
  },
  transactions: {
    top: 584,
    fontSize: FontSize.size_5xl,
    letterSpacing: 3.4,
    left: 22,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "600",
    position: "absolute",
  },
  senzosSpaza: {
    left: 91,
    top: 648,
    color: Color.colorBlack,
    lineHeight: 18,
  },
  phumlani: {
    top: 734,
    left: 91,
    color: Color.colorBlack,
    lineHeight: 18,
  },
  charlieman: {
    top: 820,
    left: 91,
    color: Color.colorBlack,
    lineHeight: 18,
  },
  am: {
    top: 670,
    left: 91,
  },
  pm: {
    top: 755,
    left: 90,
  },
  oct2023: {
    top: 845,
    left: 91,
  },
  viewAll: {
    top: 587,
    left: 332,
    fontSize: 18,
    letterSpacing: 2.5,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  new: {
    top: -1,
    left: 4,
    lineHeight: 14,
    color: "#fff9f9",
  },
  newWrapper: {
    top: 589,
    left: 207,
    borderRadius: 12,
    width: 52,
    height: 14,
    overflow: "hidden",
  },
  ellipseIcon: {
    top: 648,
  },
  iphone1415ProMax9Child3: {
    top: 734,
  },
  iphone1415ProMax9Child4: {
    top: 820,
  },
  vectorIcon: {
    height: "2.36%",
    width: "5.12%",
    top: "71.03%",
    right: "84.65%",
    bottom: "26.61%",
    left: "10.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  biglobeIcon: {
    top: 834,
  },
  czar53: {
    top: 661,
    left: 300,
    letterSpacing: 2.8,
    fontSize: FontSize.size_xl,
  },
  czarR70: {
    top: 745,
    left: 300,
    letterSpacing: 2.8,
    fontSize: FontSize.size_xl,
  },
  czar130: {
    left: 302,
    top: 834,
  },
  bicashCoinIcon: {
    top: 748,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  makiarrow: {
    left: 36,
    top: 74,
    width: 25,
    height: 25,
    position: "absolute",
  },
  iphone1415ProMax9: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default IPhone1415ProMax9;
