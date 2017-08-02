/* @flow */
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

export type props = {
  value: number,
  increaseValue: Function,
  decreaseValue: Function,
  changeAllValue: Function
};

const Header = () => {
  const style = {
    container: {
      height: 50,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonContainer: { flex: 1, flexDirection: "row" },
    button: {
      flex: 1,
      backgroundColor: "grey",
      justifyContent: "center"
    }
  };
  return (
    <View style={style.container}>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            Actions.first();
          }}
        >
          <Text style={{ textAlign: "center" }}>First Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            Actions.second();
          }}
        >
          <Text style={{ textAlign: "center" }}>Second Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            Actions.third();
          }}
        >
          <Text style={{ textAlign: "center" }}>Third Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
