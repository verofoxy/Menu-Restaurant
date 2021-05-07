import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

export default class Product extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: "#e8e8e8",
          height: 350,
          width: 350,
          borderRadius: 25,
          marginRight: 20,
          marginLeft: 10,
          marginBottom: 20,
          borderWidth: .5,
          borderColor: "#9ad3bc",
        }}
        
      >
        <View style={{ alignItems:"center", marginTop: 20}}>
        <Image source={this.props.image} style={{height :300, width: 300, borderRadius : 25}}/>
        </View>
      </TouchableOpacity>
    );
  }
}
