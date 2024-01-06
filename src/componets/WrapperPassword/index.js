import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

import * as Clipboard from "expo-clipboard";

export const WrapperPassword = ({ password, removePass }) => {
  // visibilidade da senha
  const [visibleItem, setVisibleItem] = useState(true);

  // copia a senha para o clipboard
  const copyPassword = async () => {
    if (visibleItem) {
      Alert.alert("Não é possivel copiar a senha, ela está oculta!");
      return;
    }
    await Clipboard.setStringAsync(password);
    Alert.alert("Senha copiada!", "Use com sabedoria🤨", [
      {
        text: "Belezura",
        onPress: () => setVisibleItem(true),
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.wrapper}>
      {/* text box */}
      <View style={styles.containerTextPass}>
        <TouchableOpacity style={styles.touchableText} onPress={copyPassword}>
          <TextInput
            style={styles.textPass}
            secureTextEntry={visibleItem}
            // multiline={true}
            editable={false}
            pointerEvents="none"
            value={password}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconDelete}>
        {/* button delete */}
        <TouchableOpacity style={styles.buttonDelete} onPress={removePass}>
          <Ionicons name="md-trash-outline" color={"red"} size={25} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonVisible}
          onPress={() => setVisibleItem(!visibleItem)}
        >
          {visibleItem ? (
            <Ionicons name="ios-eye" color={"gray"} size={25} />
          ) : (
            <Ionicons name="ios-eye-off" color={"gray"} size={25} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 100,
    padding: 10,
    borderRadius: 10,
    gap: 10,
    marginBottom: 10,
    backgroundColor: "#fefefd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableText: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTextPass: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#c4c4c430",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#00000070",
    padding: 4,
  },
  textPass: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    letterSpacing: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  iconDelete: {
    flex: 1,
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonDelete: {
    width: 50,
    height: 100,

    backgroundColor: "#fefefd",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonVisible: {
    width: 50,
    height: 100,
    backgroundColor: "#fefefd",

    justifyContent: "center",
    alignItems: "center",
  },
});
