import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class AuthInput extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType={this.props.returnKeyType}
          autoCorrect={false}
          secureTextEntry={this.props.isPassword}
          // onSubmitEditing={() => this.refs.txtPassword.focus()}
          onChangeText={(username) => this.setState({ username })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
