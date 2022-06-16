import React, { useState, useEffect } from "react";
import { useSelect, useSelector } from "react-redux";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import backSpecial from "../../../assets/icons/blackback.png";
import * as Animatable from "react-native-animatable";

import Order from "../../components/Order";
import { hostname } from "../../constant/constant";

const OrderHistory = (props) => {
  const [dataSource, setDataSource] = useState([]);

  const currentUser = useSelector((state) => state.users);

  const goBackToMain = () => {
    props.navigation.goBack();
  };

  const currentCart = currentUser.cart;

  useEffect(() => {
    const url = `http://${hostname}/user/${currentUser.cart.id}/getOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        setDataSource(resData);
      })
      .catch((err) => console.log(err));
  }, [currentCart.detail]);

  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    orderRow,
  } = styles;

  return (
    <Animatable.View style={wrapper} animation="fadeInRight" duration={500}>
      <View style={header}>
        <View />
        <TouchableOpacity onPress={goBackToMain}>
          <Image source={backSpecial} style={backIconStyle} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={headerTitle}>Order History</Text>
        </View>
      </View>
      <View style={body}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Order
              id={item.id}
              orderDate={item.orderDate}
              userId={item.userId}
            ></Order>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </Animatable.View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#0099FF",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: "#203546",
    fontSize: 20,
  },
  backIconStyle: {
    width: 30,
    height: 30,
  },
  body: {
    flex: 10,
    backgroundColor: "#F6F6F6",
  },
});

export default OrderHistory;
