import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SuccessfulValidationScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <FontAwesome name="check-circle" color="#0099FF" size={150} />
        <Text style={styles.text_footer}>VALIDATE SUCCESSFULLY</Text>
        <Text style={[styles.text_footer, { marginTop: 10 }]}>
          {/* CLICK TO CONTINUE Validate successfully */}
          Click to continue
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Main");
          }}
        >
          <Text style={styles.button_text}>GO</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SuccessfulValidationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099FF",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#0099FF",
    borderRadius: 30,
    width: 100,
    height: 40,
  },
  button_text: {
    fontSize: 20,
    color: "#fff",
  },
});
