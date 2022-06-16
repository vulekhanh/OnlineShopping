import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuNavigator from "./MenuNavigator";
import ProductDetail from "../screens/Main/Products/ProductDetail";
import Search from "../screens/Main/Search/Search";
const Stack = createStackNavigator();

export default class MainScreen extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="MenuNavigator">
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuNavigator"
          component={MenuNavigator}
          options={{ headerShown: false }}
          navigation={this.props.navigation}
        />
        <Stack.Screen
          name="SearchScreen"
          component={Search}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
