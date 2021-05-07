import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import bacon from "../../images/crepe/2/bacon.png";


//////burger 2
import imgburger2 from "../../images/burger/2/burger.png";
import cheese2 from "../../images/burger/2/cheese.png";
import ketchup from "../../images/burger/2/ketchup.png";
import meat2 from "../../images/burger/2/meat.png";
import onions1 from "../../images/burger/2/onions.png";
export default class Detail extends React.Component {
  state = {
    quantity: 1,
  };

  addQuantity = (quantity) => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  subtractQuantity = (quantity) => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: "#FFF" }}>
        <ScrollView>
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
                  290 Calories
                </Text>
              </View>
            </View>
            <View style={{ width: "10%" }}>
              <Ionicons name="md-heart" size={30} color="#f05454" />
            </View>
          </View>
          <Image
            source={imgburger2}
            style={{
              height: 300,
              width: 300,
              alignSelf: "center",
              borderRadius :25
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              backgroundColor: "#f6f3fb",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={this.addQuantity}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                +
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 20,
              }}
            >
              {this.state.quantity}
            </Text>

            <TouchableOpacity onPress={this.subtractQuantity}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
              marginTop: 30,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Smokehouse{" "}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#a4a4a9",
                }}
              >
                Beef burger
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 28,
                marginLeft: 80,
              }}
            >
              $12.99
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginHorizontal: 20,
            }}
          >
            Ingredients
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20, marginHorizontal: 20, marginLeft : 70 }}
          >
            <View
              style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 10,
              }}
            >
              <Image source={cheese2} style={{ height: 30, width: 30 }} />
            </View>

            <View
              style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 10,
              }}
            >
              <Image source={ketchup} style={{ height: 30, width: 30 }} />
            </View>
            <View
              style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 10,
              }}
            >
              <Image source={onions1} style={{ height: 30, width: 30 }} />
            </View>

            <View
              style={{
                borderRadius: 15,
                borderWidth: 0.1,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 10,
              }}
            >
              <Image source={meat2} style={{ height: 30, width: 30 }} />
            </View>
            

          </ScrollView>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginHorizontal: 20,
            }}
          >
            Details
          </Text>
          <Text
            style={{
              color: "#a4a4a9",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 10,
              marginHorizontal: 20,
              textAlign: "justify",
            }}
          >
            The most unique fire grilled patty, flame grilled, charred, seared,
            well-done All natural beef, grass-feed beef, Fiery, juicy, greacy.
            delicous moist The most unique fire grilled patty, flame grilled,
            charred, seared, well-done All natural beef, grass-feed beef, Fiery,
            juicy, greacy. delicous moist
          </Text>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#000",
            height: 50,
            width: 50,
            bottom: 20,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 25,
          }}
        >
          <Ionicons name="md-cart" size={30} color="#f05454" />
        </View>
      </View>
    );
  }
}
