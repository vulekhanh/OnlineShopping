import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

import { changeUser } from "../../store/actions/users";
import { hostname } from "../../constant/constant";

const SignInScreen = (props) => {
  const isFirstRun = useRef(true);

  const [data, setData] = useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const [triggerSignIn, setTriggerSignIn] = useState(false);

  const dispatch = useDispatch();

  const getUserHandler = useCallback(
    (cart) => {
      dispatch(changeUser(data.username, cart));
    },
    [dispatch, data.username]
  );

  const handleUsernameChange = (val) => {
    if (!data.isValidUser) data.isValidUser = true;

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
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
    });
  };

  const handleSignIn = () => {
    setTriggerSignIn(!triggerSignIn);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const url = `http://${hostname}/auth/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => {
        data.isValidUser = res.status === 401 ? false : true;
        data.isValidPassword = res.status === 402 ? false : true;

        setData({ ...data });
        return res.json();
      })
      .then(() => {
        const url = `http://${hostname}/user/getUserId/?username=${data.username}`;
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((resData) => {
            getUserHandler(resData);
          });
      })
      .then(() => {
        props.navigation.navigate("SuccessfulValidation");
      })
      .then(() => resetState())
      .catch((err) => console.log(err));
  }, [triggerSignIn]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />

          {/*==================================================================================== */}
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            value={data.username}
            onChangeText={(value) => handleUsernameChange(value)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>This user does not exist!</Text>
          </Animatable.View>
        )}

        {/*==================================================================================== */}
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            value={data.password}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlePasswordChange(value)}
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
            <Text style={styles.errorMessage}>Wrong password</Text>
          </Animatable.View>
        )}
        {/*==================================================================================== */}

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            resetState();
            props.navigation.navigate("SignUpScreen");
          }}
          style={[
            styles.signIn,
            { borderColor: "#05375a", borderWidth: 1, marginTop: 15 },
          ]}
        >
          <Text style={[styles.textSign, { color: "#05375a" }]}>Sign Up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffcc33",
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
