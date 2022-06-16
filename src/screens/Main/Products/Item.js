import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { clickItem } from "../../../store/actions/items";
const { width } = Dimensions.get("window");

const Item = (props) => {
  const { item, onPress } = props;
  const { imageStyle, price, name } = styles;

  const [itemClicked, setItemClicked] = useState(false);

  const dispatch = useDispatch();

  const clickItemHandler = useCallback(() => {
    dispatch(clickItem(props.item));
  }, [itemClicked]);

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        clickItemHandler();
        props.onSelect();
      }}
    >
      <View style={styles.item}>
        <View>
          <Image style={imageStyle} source={{ uri: item.imageUrl }} />
        </View>
        <View style={styles.content}>
          <Text style={name}>{item.title}</Text>
          <Text style={price}>{item.price}đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    width: width / 2 - 10,
    //flexGrow: 1,
    backgroundColor: "#fff",
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "column",
    //shadowColor: "#2E272B",
   // shadowOffset: { width: 0, height: 3 },
    //shadowOpacity: 0.2,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: width / 2 - 10,
    // height: width / 2 - 20,
    height: width / 2,
    borderRadius: 5,
    //resizeMode: "stretch"
  },
  price: {
    color: "#0733ba",
  },
});
