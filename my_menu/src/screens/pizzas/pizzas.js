import React from "react";
import {Text, View, ScrollView , TouchableOpacity } from "react-native";
import Product from "../../components/product";
import { Ionicons } from "@expo/vector-icons";

import imgpizza1 from "../../images/pizza/1/pizza.png";
import imgpizza2 from "../../images/pizza/2/pizza.png";

export default class Pizzas extends React.Component {
  render() {
    return (
      <View>
      <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 40,
              marginHorizontal: 20,
            }}
          >
            <View style={{ width: "10%" }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="md-arrow-round-back" size={30} color="#f05454" />
                
              </TouchableOpacity>
            </View>
            <View style={{ width: "80%", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Ionicons name="md-flame" size={30} color="#f05454" />

                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Our Pizzas
                </Text>
              </View>
            </View>
            <View style={{ width: "10%" }}>
              <Ionicons name="md-heart" size={30} color="#f05454" />
            </View>
          </View>

<ScrollView horizontal>
      
      <View
      style={{
        flexDirection: "row",
        marginHorizontal: 15,
        marginTop: 100,
      }}
      >
      <Product
        image={imgpizza1}
        title="Smokehouse"
        price="12.99"
        onPress={() => this.props.navigation.navigate("detailspizza1")}
        />
      <Product
        image={imgpizza2}
        title="Honey Chilli"
        price="10.99"
        marginTop={25}
        onPress={() => this.props.navigation.navigate("detailspizza2")}
        /> 
    </View>
  </ScrollView>
    </View>
    );
  }
}
