import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import useStorage from "../../hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { WrapperPassword } from "../../componets/WrapperPassword";

export const PasswordPage = () => {
  const [listPass, setListPass] = useState([]); // array de senhas
  const isFocused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPass() {
      const passwords = await getItem("@PASSWORD");
      setListPass(passwords);
    }
    loadPass();
  }, [isFocused]);

  const handlerDelete = async (item) => {
    const newItems = await removeItem("@PASSWORD", item);
    setListPass(newItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Senhas:</Text>
      </View>

      <FlatList
        data={listPass}
        renderItem={({ item }) => (
          <WrapperPassword
            password={item}
            removePass={() => handlerDelete(item)}
          />
        )}
        keyExtractor={(item) => item}
        style={{ width: "100%", height: "100%" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerTitle: {
    width: "100%",
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    width: "100%",
    letterSpacing: 1.5,
  },
});
