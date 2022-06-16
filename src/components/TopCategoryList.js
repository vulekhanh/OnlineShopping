import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryProduct from "../components/CategoryProduct";
//import CategoryProduct from "CategoryProducts.js";

import dress from "../../assets/icons/category/dress.png";
import shoe from "../../assets/icons/category/shoe.png";
import purse from "../../assets/icons/category/purse.png";
import t_shirt from "../../assets/icons/category/t_shirt.png";
import jewelry from "../../assets/icons/category/jewelry.png";
import pajama from "../../assets/icons/category/pajama.png";
import wedding_dress from "../../assets/icons/category/wedding_dress.png";
import watches from "../../assets/icons/category/watches.png";
import trainers from "../../assets/icons/category/trainers.png";
import slippers from "../../assets/icons/category/slippers.png";
import skirt from "../../assets/icons/category/skirt.png";
import shorts from "../../assets/icons/category/shorts.png";
import flip_flops from "../../assets/icons/category/flip_flops.png";
import bra from "../../assets/icons/category/bra.png";
import hat from "../../assets/icons/category/hat.png";



const categories = [
  { id: 1, name: "dress", image: dress },
  { id: 2, name: "jewelry", image: jewelry },
  { id: 3, name: "shoe", image: shoe },
  { id: 4, name: "wedding_dress", image: wedding_dress },
  { id: 5, name: "watch", image: watches },
  { id: 6, name: "trainers", image: trainers },
  { id: 7, name: "purse", image: purse },
  { id: 8, name: "skirt", image: skirt },
  { id: 9, name: "shorts", image: shorts },
  { id: 10, name: "flip flops", image: flip_flops },
  { id: 11, name: "bra", image: bra },
  { id: 12, name: "hat", image: hat },
  { id: 13, name: "T-shirt", image: t_shirt },
  { id: 14, name: "pajama", image: pajama },
  { id: 15, name: "slipper", image: slippers },
];

const TopCategory = (props) => {

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={(item) => 
        <CategoryProduct 
          data={item}  
          onSelected={()=>{
            //console.log(item.item.name);
            props.onTypeClicked(item.item.name);
          }}
        />}
      keyExtractor={(item) => item.id}
      style = {{backgroundColor: '#fff'}}
    />

  );
};

export default TopCategory;
