import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import map from "../../../../assets/items/women.jpg";

import phoneIcon from "../../../../assets/icons/phone.png";
import mailIcon from "../../../../assets/icons/mail.png";
import messageIcon from "../../../../assets/icons/message.png";
import locationIcon from "../../../../assets/icons/location.png";

class Contact extends Component {
  render() {
    const {
      mapContainer,
      wrapper,
      infoContainer,
      rowInfoContainer,
      imageStyle,
      infoText,
      title,
      headerTitle
    } = styles;
    return (
      <View style={wrapper}>
        <View style={title}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={headerTitle}>Contact</Text>
          </View>
        </View>
        <View style={mapContainer}>
          <Image
            style={{ flex: 1, alignSelf: "stretch", width: undefined }}
            source={map}
          />
        </View>
        <View style={infoContainer}>
          <View style={rowInfoContainer}>
            <Image source={locationIcon} style={imageStyle} />
            <Text style={infoText}>Dai hoc cong nghe thong tin</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={phoneIcon} style={imageStyle} />
            <Text style={infoText}>(+84)09409409 </Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={mailIcon} style={imageStyle} />
            <Text style={infoText}>MuaSamThoiTrang@gmail.com</Text>
          </View>
          <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
            <Image source={messageIcon} style={imageStyle} />
            <Text style={infoText}>(+84) 709999999</Text>
          </View>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#F6F6F6" },
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: "#FFF",
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  infoText: {
    //fontFamily: 'Avenir',
    color: "#AE005E",
    fontWeight: "500",
  },
  title:{
    height: 40,
    backgroundColor: "#0099FF",
  },
    headerTitle: { color: "#203546", fontSize: 20 },
});

export default Contact;

