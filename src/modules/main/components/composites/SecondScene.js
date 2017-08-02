/* @flow */
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../units/Header";

export type props = {
  value: number,
  increaseValue: Function,
  decreaseValue: Function,
  changeAllValue: Function
};

class SecondScene extends Component {
  state: Object;
  constructor(props: props) {
    super(props);
    this.state = {
      color: "green"
    };
  }
  render() {
    const { value, increaseValue, decreaseValue, changeAllValue } = this.props;
    return (
      <View style={this.style.container}>
        <Header />
        <View style={this.style.buttonContainer}>
          <TouchableOpacity style={this.style.button} onPress={increaseValue}>
            <Text>Increase This Page Value</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.style.button} onPress={decreaseValue}>
            <Text>Decrease This Page Value</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.style.button} onPress={changeAllValue}>
            <Text>Change First Page Value By 2</Text>
          </TouchableOpacity>
        </View>
        <View style={this.style.container}>
          <Text>current value is...</Text>
          <Text style={{ fontSize: 50 }}>
            {value}
          </Text>
        </View>
      </View>
    );
  }

  style = {
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonContainer: { height: 50, flexDirection: "row" },
    button: {
      flex: 1,
      backgroundColor: "green",
      justifyContent: "center"
    }
  };
}

export default SecondScene;
