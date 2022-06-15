import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { hostname } from "../constant/constant";

const Order = (props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const url = `http://${hostname}/order/${props.id}/total`;
    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((total) => {
          setTotal(total);
        });
    };
    fetchData();
  }, []);
  return (
    <View style={styles.order}>
      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Order id:</Text>
        <Text style={styles.propValue}>{props.id}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Order time:</Text>
        <Text style={styles.propDate}>{props.orderDate}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Total:</Text>
        <Text style={styles.propPrice}>{total}</Text>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    borderColor: "#F6F6F6",
    borderWidth: 2,
    backgroundColor: "#FFF",
    margin: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.3,
    padding: 10,
    borderRadius: 4,
    //justifyContent: "space-around",
  },

  orderLine: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  propTitle: {
    color: "#9A9A9A",
    fontWeight: "bold",
  },

  propValue: {
    color: "#203546",
  },
  propDate: {
    color: "#C21C70",
  },
  propPrice: {
    color: "#C21C70",
    fontWeight: "bold",
  },
});
