import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  // busca as senhas salvas
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // adiciona uma nova senha passando a key e a senha
  const saveItem = async (key, value) => {
    try {
      const passwords = await getItem(key);

      const newPass = [...passwords, value];

      await AsyncStorage.setItem(key, JSON.stringify(newPass));
    } catch (error) {
      console.log("ERRO ", error);
    }
  };

  // remove senha passando a key e a senha
  const removeItem = async (key, item) => {
    try {
      const data = await getItem(key);
      const newData = data.filter((password) => password !== item);
      await AsyncStorage.setItem(key, JSON.stringify(newData));
      return newData;
    } catch (error) {
      console.log("ERRO ", error);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
