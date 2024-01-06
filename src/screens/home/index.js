import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  SafeAreaView,
} from "react-native";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import ModalComponent from "../../componets/Modal";

import useStorage from "../../hooks/useStorage";
import * as Clipboard from "expo-clipboard";

let charsetData =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+";

export function Home() {
  const [numberCharc, setNumberCharc] = useState(12);
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { saveItem } = useStorage();

  function gerarSenha() {
    let password = "";

    for (let i = 0; i < numberCharc; i++) {
      password += charsetData.charAt(
        Math.floor(Math.random() * charsetData.length)
      );
    }
    setPassword(password);
    setModalVisible(true);
  }

  async function savePass() {
    await Clipboard.setStringAsync(password);
    await saveItem("@PASSWORD", password);
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.caracter}>{numberCharc} Caracteres</Text>

      <Slider
        style={styles.slid}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#00FFFF80"
        maximumTrackTintColor="red"
        thumbTintColor="#00FFFF"
        value={numberCharc}
        onValueChange={(value) => setNumberCharc(value.toFixed(0))}
      />

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <ModalComponent password={password}>
          {/* copiar senha */}
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          {/* fechar modal */}
          <TouchableOpacity
            style={[styles.buttonSave, { backgroundColor: "#008080" }]}
            onPress={savePass}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>Salvar</Text>
          </TouchableOpacity>
        </ModalComponent>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 130,
    marginBottom: 2,
  },
  caracter: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  slid: {
    height: 40,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#c4c4c4",
    width: "80%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
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
