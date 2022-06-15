import React, { useState, useEffect, useRef } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";
import Item from "./Item";
import { hostname } from "../../../constant/constant";
import * as Animatable from "react-native-animatable";

const Items = (props) => {
  let allProducts = useRef([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const searchedKeys = useSelector((state) => state.keys.keys);

  const {type} = props;

  useEffect(() => {
    let route = "";
    if (props.filter && searchedKeys === "") {
      setDataSource([]);
      return;
    }
    if (!props.filter) route = "product";
    else route = `product/search/?v=${searchedKeys}`;

    const url = `http://${hostname}/${route}`;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setDataSource(resData);
        allProducts.current = resData;
      })
      .catch((err) => console.log(err));
  }, [searchedKeys]);

  useEffect(()=>{
    if(type === "all")  return;
    console.log(allProducts.current);
    const filterProducts=allProducts.current.filter((item=>item.type===type));
    console.log(filterProducts);
    setDataSource(filterProducts);
  },[type])

  return (
    <Animatable.View style={{ flex: 1 }} animation="fadeInUpBig" duration={500}>
      {props.filter && dataSource.length === 0 && searchedKeys !== "" ? (
        <Text>Cannot find</Text>
      ) : (
        <FlatList
          data={dataSource}
          numColumns={2}
          renderItem={({ item }) => (
            <Item item={item} id={props.id} onSelect={props.onSelect} />
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      )}
    </Animatable.View>
  );
};

export default Items;
