import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacityBase,
} from "react-native";
import { colors, Icon } from "react-native-elements";
import Colors from "../Colors";

export default class TodoModal extends Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.props.list.todos,
  };

  renderTodo = (todo) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
          <Icon
            name={todo.completed ? "square" : "square-o"}
            type="font-awesome"
            size={25}
            style={{ width: 32 }}
            color={Colors.gold}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? Colors.gold : Colors.white,
              fontSize: 18,
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    );
  };
  render() {
    const taskCount = this.state.todos.length;
    const completedCount = this.state.todos.filter(
      (todos) => todos.completed
    ).length;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }}
          onPress={this.props.closeModal}
        >
          <Icon name="close" type="font-awesome" color={Colors.gold} />
        </TouchableOpacity>
        <View
          style={[
            styles.section,
            styles.header,
            { borderBottomColor: this.state.color },
          ]}
        >
          <View>
            <Text style={styles.title}>{this.state.name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} of {taskCount} tasks
            </Text>
          </View>
        </View>

        <View style={[styles.section, { flex: 3 }]}>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => this.renderTodo(item)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingVertical: 64,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <KeyboardAvoidingView
          style={[styles.section, styles.footer]}
          behavior="padding"
        >
          <TextInput
            style={[styles.input, { borderColor: this.state.color }]}
          />
          <TouchableOpacity
            style={[styles.addTodo, { backgroundColor: this.state.color }]}
          >
            <Icon
              name="plus"
              type="font-awesome"
              color={colors.black}
              onPress={() => this.toggleAddTodoModal()}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  section: {
    flex: 1,
    alignItems: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.gold,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: Colors.grey,
    fontWeight: "800",
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 2,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginRight: 8,
    paddingHorizontal: 8,
    textAlign: "center",
    color: colors.white,
  },
  addTodo: {
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: colors.white,
    fontWeight: "700",
  },
});
