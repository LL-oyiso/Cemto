import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax7 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone1415ProMax7, styles.iconLayout]}>
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("IPhone1415ProMax14")}
      >
        <Text style={styles.continue1}>CONTINUE</Text>
      </Pressable>
      <Text
        style={[styles.liquidityProvider, styles.liquidityProviderPosition]}
      >
        Liquidity provider
      </Text>
      <Text
        style={[
          styles.contributeYourCryptocurrenci,
          styles.liquidityProviderPosition,
        ]}
      >
        Contribute your cryptocurrencies to our pools, making instant trades
        possible. Your contribution fuels easy and quick transactions for
        everyone. Be part of our community and boost crypto accessibility now!
      </Text>
      <Image
        style={styles.httpslottiefilescomanimatIcon}
        contentFit="cover"
        source={require("../assets/httpslottiefilescomanimationshowitworksovxq37c1sr.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
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
  liquidityProviderPosition: {
    left: 40,
    textAlign: "left",
    position: "absolute",
  },
  continue1: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  continue: {
    left: 256,
    top: 855,
    position: "absolute",
  },
  liquidityProvider: {
    top: 171,
    fontSize: FontSize.size_17xl,
    width: 390,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: 40,
  },
  contributeYourCryptocurrenci: {
    top: 269,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 345,
  },
  httpslottiefilescomanimatIcon: {
    top: 561,
    left: 63,
    width: 319,
    height: 263,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "9.3%",
    top: "9.55%",
    right: "85.28%",
    bottom: "88.49%",
    width: "5.42%",
    height: "1.96%",
    position: "absolute",
  },
  iphone1415ProMax7: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
  },
});

export default IPhone1415ProMax7;
