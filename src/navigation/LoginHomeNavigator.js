import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNav from "../navigation/AuthNavigation";
import MainNav from "../navigation/MainNavigator";
import SuccessfulValidation from "../screens/Auth/SuccessfulValidationScreen";

const Stack = createStackNavigator();

export default class LoginHomeNavigator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={AuthNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessfulValidation"
          component={SuccessfulValidation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
