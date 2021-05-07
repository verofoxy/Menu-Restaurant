import React from "react";
import {Text, View, ScrollView , TouchableOpacity } from "react-native";
import Product from "../../components/product";
import imgsalad1 from "../../images/salad/1/salade.png";
import imgsalad2 from "../../images/salad/2/salade.png";
import { Ionicons } from "@expo/vector-icons";

export default class Salads extends React.Component {
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
                  our Salads
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
            image={imgsalad1}
            title="Smokehouse"
            price="12.99"
            onPress={() => this.props.navigation.navigate("detailssalad1")}
          />
          <Product
            image={imgsalad2}
            title="Honey Chilli"
            price="10.99"
            marginTop={25}
            onPress={() => this.props.navigation.navigate("detailssalad2")}
          /> 
        </View>
      </ScrollView>
      </View>
    );
  }
}
