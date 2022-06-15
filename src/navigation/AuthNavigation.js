import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import SuccessfulRegisterScreen from "../screens/Auth/SuccessfulRegisterScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen
      name="SuccessfulRegisterScreen"
      component={SuccessfulRegisterScreen}
    />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
