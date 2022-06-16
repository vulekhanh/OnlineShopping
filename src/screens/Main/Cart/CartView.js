import React, { useState, useCallback, useEffect , useLayoutEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Text,
} from "react-native";

import CartDetail from "../../../components/CartDetail";
import { hostname } from "../../../constant/constant";
import { changeUser } from "../../../store/actions/users";

const CartView = (props) => {
  const {
    main,
    checkoutButton,
    checkoutTitle,
    wrapper,
    title,
    headerTitle,
  } = styles;

  const [pay, setPay] = useState(true);

  const currentUser = useSelector((state) => state.users);

  const cartId = useSelector((state) => state.users.cart.id);

  const productsInCart = useSelector((state) => state.users.cart.detail);

  const dispatch = useDispatch();

  const removeCartDetailHandler = useCallback(() => {
    dispatch(
      changeUser(currentUser.username, {
        id: currentUser.cart.id,
        detail: [],
      })
    );
  }, [dispatch, currentUser.cart.detail]);

  const payHandler = () => {
    if (currentUser.cart.detail.length) {
      setPay(false);
    }
  };

  useLayoutEffect(()=>{
    fetch(`http://${hostname}/cart/${cartId}/detail`).then((res)=>res.json()).then(data=>{
      dispatch(changeUser(currentUser, data));

    })
  })
  
  useEffect(() => {
    if (pay) return;
    const url = `http://${hostname}/cart/${cartId}/pay`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: cartId,
        productsInCart: productsInCart,
      }),
    })
      .then(() => {
        removeCartDetailHandler();
      })
      .then(() => {
        setPay(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pay]);

  return (
    <View style={wrapper}>
      <View style={title}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={headerTitle}>Cart</Text>
        </View>
      </View>
      <ScrollView style={main}>
        {
          productsInCart? productsInCart.map((item, index) => (
            <CartDetail
              item={item}
              onSelect={() => {
                props.navigation.navigate("ProductDetail");
              }}
              key={index}
            />
          )
          ) : null
        }
      </ScrollView>
      <TouchableOpacity style={checkoutButton} onPress={payHandler}>
         <Text style={checkoutTitle}>
          TOTAL {productsInCart.reduce((a, b) => a + b.price * b.quantity, 0)}đ
          CHECKOUT NOW
        </Text> 
      </TouchableOpacity>
    </View>
  );
};

export default CartView;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF",
  },
  main: {
    width,
    backgroundColor: "#DFDFDF",
  },
  checkoutTitle: {
    color: "#203546",
    fontSize: 15,
    fontWeight: "bold",
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: "#0099FF",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    height: 40,
    backgroundColor: "#0099FF",
  },
  headerTitle: { color: "#203546", fontSize: 20 },
});
