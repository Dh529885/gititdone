import React, { Component } from "react";
import { Icon } from "react-native-elements";
import colors from "../Colors";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Colors from "../Colors";
import tempData from "../tempData";

export default class AddListModal extends React.Component {
  backgroundColors = ["#e3af25", "#ff6666", "#525266", "#423f3b", "#a37406"];
  state = {
    name: "",
    color: this.backgroundColors[0],
  };

  createTodo = () => {
    const { name, color } = this.state;

    tempData.push({
      name,
      color,
      todos: [],
    });

    this.setState({ name: "" });
    this.props.closeModal();
  };

  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={this.props.closeModal}
        >
          <Icon name="close" type="font-awesome" color={colors.gold} />
        </TouchableOpacity>

        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text style={styles.title}> Create Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name?"
            placeholderTextColor="#C7C7CD"
            onChangeText={(text) => {
              return this.setState({ name: text });
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {this.renderColors()}
          </View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
            onPress={this.createTodo}
          >
            <Text style={{ color: "#fffcf6", fontWeight: "600", fontSize: 17 }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.white,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.gold,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    textAlign: "center",
    color: colors.white,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 32,
    height: 32,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
