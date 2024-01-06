import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

import * as Clipboard from "expo-clipboard";

const ModalComponent = ({ password, children }) => {
  async function copyPass() {
    await Clipboard.setStringAsync(password);
    Alert.alert("Copiada com sucesso!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.backTitle}>
          <Text style={styles.title}>Senha Gerada</Text>
        </View>

        {/* senha */}
        <Pressable style={styles.pressContainer} onPressIn={copyPass}>
          <Text style={styles.textPass}>{password}</Text>
        </Pressable>

        {children}
      </View>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000070",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    width: "80%",
    height: 250,
    backgroundColor: "red",
    borderRadius: 10,
    backgroundColor: "#fd6980",

    borderWidth: 1,
    borderColor: "#00000070",
  },
  backTitle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00000070",

    backgroundColor: "#fefefd",
    width: "98%",
    position: "absolute",
    top: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
  },
  textPass: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  pressContainer: {
    backgroundColor: "#c4c4c430",

    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#00000070",
    padding: 10,
  },

  buttonBack: {
    width: 120,
    height: 50,
    backgroundColor: "#fefefd",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: -20,
    left: 20,
    borderWidth: 2,
    borderColor: "#00000070",
  },
  buttonSave: {
    width: 120,
    height: 50,
    backgroundColor: "#fefefd",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: -20,
    right: 20,
    borderWidth: 2,
    borderColor: "#00000070",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});
