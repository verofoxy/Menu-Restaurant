import React from "react";
import {Text, View, ScrollView, TouchableOpacity  } from "react-native";
import Product from "../../components/product";
import { Ionicons } from "@expo/vector-icons";

import imgpasta1 from "../../images/pasta/1/pasta.png";
import imgpasta2 from "../../images/pasta/2/pasta.png";

export default class Pastas extends React.Component {
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
                  Our Pastas
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
        image={imgpasta1}
        title="Smokehouse"
        price="12.99"
        onPress={() => this.props.navigation.navigate("detailspasta1")}
      />
      <Product
        image={imgpasta2}
        title="Honey Chilli"
        price="10.99"
        marginTop={25}
        onPress={() => this.props.navigation.navigate("detailspasta2")}

      /> 
    </View>
  </ScrollView>
  </View>
    );
  }
}
