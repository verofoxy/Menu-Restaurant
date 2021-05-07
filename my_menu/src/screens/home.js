import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Product from "../components/product";
import imgburger from "../images/burger/burger.png";
import imgburger1 from "../images/burger/1/burger.png";
import imgpizza1 from "../images/pizza/1/pizza.png";

import imgpizza from "../images/pizza/pizza.png";
import imgcrepe from "../images/crepe/crepe.png";
import imgpasta from "../images/pasta/pasta.png";
import imgsalad from "../images/salad/salad.png";

export default class Home extends React.Component {
  state = {
    city: "Los Angeles",
  };
  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text style={styles.txtneeds}>Tasty menu</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 40 }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Burgers")}
          >
            <View style={styles.logoFood}>
              <Image source={imgburger} style={styles.backgroundLogoFood} />
              <Text style={styles.txtFood}>Burgers</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Pizzas")}
          >
            <View style={styles.logoFood}>
              <Image source={imgpizza} style={styles.backgroundLogoFood} />
              <Text style={styles.txtFood}>Pizzas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Pastas")}
          >
            <View style={styles.logoFood}>
              <Image source={imgpasta} style={styles.backgroundLogoFood} />
              <Text style={styles.txtFood}>Pastas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Crepes")}
          >
            <View style={styles.logoFood}>
              <Image source={imgcrepe} style={styles.backgroundLogoFood} />
              <Text style={styles.txtFood}>Crepes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Salads")}
          >
            <View style={styles.logoFood}>
              <Image source={imgsalad} style={styles.backgroundLogoFood} />
              <Text style={styles.txtFood}>Salads</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 10,
            paddingHorizontal: 40,
            flexDirection: "row",
            marginTop: 40,
            backgroundColor: "#f3eac2",
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Our Fancy Products
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <Ionicons name="md-flame" size={30} color="#f05454" />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              100
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 15,
            marginTop: 30,
          }}
        >
          <Product
            image={imgburger1}
            title="Smokehouse"
            price="12.99"
            onPress={() => this.props.navigation.navigate("detailsburger1")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 15,
            marginTop: 30,
          }}
        >
          <Product
            image={imgpizza1}
            title="Smokehouse"
            price="12.99"
            onPress={() => this.props.navigation.navigate("detailspizza1")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#FFF",
  },
  txtneeds: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 100,
  },
  logoFood: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f9dd7a",
    marginHorizontal: 15,
    borderRadius: 25,
    paddingVertical: 5,
    paddingLeft: 15,
  },
  txtFood: {
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
  },
  backgroundLogoFood: { height: 40, width: 40 },
});
