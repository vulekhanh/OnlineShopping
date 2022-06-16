import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

import { hostname } from "../../constant/constant";

const SignUpScreen = (props) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    userExist: false,
  });

  // const isFirstRun = useRef(true);

  const handleUsernameChange = (val) => {
    if (!data.isValidUser) data.isValidUser = true;
    if (data.userExist) data.userExist = false;
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (!data.isValidPassword) data.isValidPassword = true;
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    if (!data.isValidConfirmPassword) data.isValidConfirmPassword = true;
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const resetState = () => {
    setData({
      username: "",
      password: "",
      confirm_password: "",
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
      isValidConfirmPassword: true,
    });
  };

  const handleSignUp = () => {
    if (data.password !== data.confirm_password) {
      setData({ ...data, isValidConfirmPassword: false });
      return;
    }

    if (data.username.length < 5) {
      data.isValidUser = false;
      setData({ ...data });
      return;
    }
    if (data.password.length < 8) {
      data.isValidPassword = false;
      setData({ ...data });
      return;
    }
    if (data.confirm_password.length < 8) {
      data.isValidConfirmPassword = false;
      setData({ ...data });
      return;
    }
    // setTriggerSignUp(!triggerSignUp);

    const url = `http://${hostname}/auth/signup`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          setData({ ...data, check_textInputChange: false });
          const err = new Error("Username already exists!");
          err.status = 422;
          throw err;
        }
        setData({ ...data, check_textInputChange: true });
        return res.json();
      })
      .then((result) => {
        props.navigation.navigate("SuccessfulRegisterScreen");
      })
      .then((result) => {
        resetState();
        return result;
      })
      .catch((err) => {
        if ((err.status = 422)) {
          data.userExist = true;
          setData({ ...data });
        }
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        {/*Email ========================================================================*/}
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handleUsernameChange(value)}
            value={data.username}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Username field must be at least 5 characters!
            </Text>
          </Animatable.View>
        )}
        {!data.userExist ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              This username has already existed!
            </Text>
          </Animatable.View>
        )}

        {/*Password ==========================================================================*/}
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlePasswordChange(value)}
            value={data.password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Password field must be at least 8 characters!
            </Text>
          </Animatable.View>
        )}
        {/*Confirm password ======================================================================*/}
        <Text style={[styles.text_footer, { marginTop: 35 }]}>
          Confirmed Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handleConfirmPasswordChange(value)}
            value={data.confirm_password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        {data.isValidConfirmPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Confirmed password confirmation does not match!
            </Text>
          </Animatable.View>
        )}
        {/*Button========================================================================== */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            resetState();
            props.navigation.navigate("SignInScreen");
          }}
          style={[
            styles.signIn,
            { borderColor: "#05375a", borderWidth: 1, marginTop: 15 },
          ]}
        >
          <Text style={[styles.textSign, { color: "#05375a" }]}>Sign In</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#0099FF",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    paddingLeft: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
