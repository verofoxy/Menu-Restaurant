import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";

import Burgers from "../screens/burgers/burgers.js";
import detailsburger1 from "../screens/burgers/detailsburger1";
import detailsburger2 from "../screens/burgers/detailsburger2";

import Crepes from "../screens/crepes/crepes";
import detailscrepe1 from "../screens/crepes/detailscrepe1"
import detailscrepe2 from "../screens/crepes/detailscrepe2"

import Pastas from "../screens/pastas/pastas";
import detailspasta1 from "../screens/pastas/detailspasta1"
import detailspasta2 from "../screens/pastas/detailspasta2"

import Pizzas from "../screens/pizzas/pizzas";
import detailspizza1 from "../screens/pizzas/detailspizza1"
import detailspizza2 from "../screens/pizzas/detailspizza2"

import Salads from "../screens/salads/salads";
import detailssalad1 from "../screens/salads/detailssalad1"
import detailssalad2 from "../screens/salads/detailssalad2"

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Burgers" component={Burgers} />
      <Stack.Screen name="detailsburger1" component={detailsburger1} />
      <Stack.Screen name="detailsburger2" component={detailsburger2} />
      <Stack.Screen name="Crepes" component={Crepes} />
      <Stack.Screen name="detailscrepe1" component={detailscrepe1} />
      <Stack.Screen name="detailscrepe2" component={detailscrepe2} />
      <Stack.Screen name="Pastas" component={Pastas} />
    <Stack.Screen name="detailspasta1" component={detailspasta1} />
      <Stack.Screen name="detailspasta2" component={detailspasta2} />
      <Stack.Screen name="Pizzas" component={Pizzas} />
      <Stack.Screen name="detailspizza1" component={detailspizza1} />
      <Stack.Screen name="detailspizza2" component={detailspizza2} />
      <Stack.Screen name="Salads" component={Salads} />
      <Stack.Screen name="detailssalad1" component={detailssalad1} />
      <Stack.Screen name="detailssalad2" component={detailssalad2} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
