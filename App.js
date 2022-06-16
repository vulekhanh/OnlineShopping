import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import LoginNavigator from "./src/navigation/LoginHomeNavigator";
import usersReducer from "./src/store/reducers/users";
import itemsReducer from "./src/store/reducers/items";
import keysReducer from "./src/store/reducers/keys";

StatusBar.setHidden(true);

const rootReducer = combineReducers({
  users: usersReducer,
  items: itemsReducer,
  keys: keysReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
