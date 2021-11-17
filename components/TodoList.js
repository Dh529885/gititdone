import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../Colors";

const TodoList = ({ list }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const finishedSubTitle = list.todos.length - completedCount;
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.count}>{completedCount}</Text>
        <Text style={styles.subtitle}>Left</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.count}>{finishedSubTitle}</Text>
        <Text style={styles.subtitle}>Finished</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 50,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default TodoList;
