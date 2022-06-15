import React, { Component } from "react";
import { View } from "react-native";
import Swiper from "../../../components/Swiper";
export default class SpecialItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [1, 2, 3],
    };
  }

  goToProductDetail() {
    const { navigation } = this.props;
    navigation.navigate("ProductDetail");
  }

  render() {
    return (
      <View>
        <Swiper />
      </View>
    );
  }
}
