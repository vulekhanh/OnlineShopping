import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ContactScreen from "../screens/Main/Contact/Contact";
import CartScreen from "../screens/Main/Cart/CartView";
import ProductsScreen from "../screens/Main/Products/ProductsView";

const Tab = createBottomTabNavigator();
export default class TabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersArray: [],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              let icon;
              if (route.name === "Contact") {
                icon =
                focused == true
                  ? require('../../assets/icons/blue_account.png')
                  : require('../../assets/icons/account.png');
              } else if (route.name === "Home") {
                icon =  
                focused == true
                    ? require('../../assets/icons/blue_home.png')
                    : require('../../assets/icons/home.png');
              } else if (route.name === "Cart") {
                icon =
                focused == true
                  ? require('../../assets/icons/blue_cart.png')
                  : require('../../assets/icons/cart.png');
              }
              return <Image source={icon} style={styles.tabIcon} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#0099FF",
            // inactiveTintColor: "#8E8E93",
          }}
        >
          <Tab.Screen name="Home" component={ProductsScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});