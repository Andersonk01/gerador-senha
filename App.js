import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import Footer from "./src/componets/Footer";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
      <Footer />
    </NavigationContainer>
  );
}
