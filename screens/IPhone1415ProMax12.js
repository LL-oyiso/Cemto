import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax12 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415ProMax12}>
      <Text style={styles.helloPleaseRegister}>{`Hello, Please register 
to continue`}</Text>
      <View style={[styles.iphone1415ProMax12Child, styles.iphone1415Layout]} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <View style={[styles.iphone1415ProMax12Item, styles.iphone1415Layout]} />
      <LinearGradient
        style={[styles.wrapper, styles.iphone1415Layout]}
        locations={[0, 1]}
        colors={["#aaff00", "rgba(211, 255, 0, 0.26)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("IPhone1415ProMax3")}
        />
      </LinearGradient>
      <Text style={styles.register}>Register</Text>
      <Text style={[styles.email, styles.nameTypo]}>{`Email `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 63,
    position: "absolute",
  },
  nameTypo: {
    color: Color.colorDarkgray_100,
    letterSpacing: 3.8,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  helloPleaseRegister: {
    top: 150,
    fontSize: 34,
    width: 381,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 45,
    position: "absolute",
  },
  iphone1415ProMax12Child: {
    top: 358,
    width: 339,
    borderWidth: 1,
    borderColor: Color.colorGreenyellow,
    borderStyle: "solid",
    height: 63,
    borderRadius: Border.br_sm,
    left: 45,
    backgroundColor: Color.colorWhite,
  },
  name: {
    top: 378,
    left: 78,
  },
  iphone1415ProMax12Item: {
    top: 527,
    width: 339,
    borderWidth: 1,
    borderColor: Color.colorGreenyellow,
    borderStyle: "solid",
    height: 63,
    borderRadius: Border.br_sm,
    left: 45,
    backgroundColor: Color.colorWhite,
  },
  pressable: {
    height: "100%",
    backgroundColor: Color.gradientColorGreen,
    borderRadius: Border.br_sm,
    width: "100%",
  },
  wrapper: {
    left: 97,
    top: 708,
    width: 236,
  },
  register: {
    top: 728,
    left: 173,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  email: {
    top: 547,
    left: 79,
  },
  iphone1415ProMax12: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax12;
