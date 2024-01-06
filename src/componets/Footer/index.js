import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© Todos os direitos - Anderson Kauer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 20,
    padding: 2,
    position: "relative",
    bottom: 0,
    left: 0,
  },
  text: {
    fontSize: 12,
    letterSpacing: 1.5,
    fontStyle: "italic",
  },
});
