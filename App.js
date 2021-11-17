import { Icon } from "react-native-elements";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            GET
            <Text style={{ fontWeight: "800", color: colors.gold }}>IT</Text>
            <Text style={{ fontWeight: "800", color: colors.white }}>DONE</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity>
            <Icon
              name="plus"
              type="font-awesome"
              color={colors.gold}
              onPress={() => console.log("hello")}
            />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.gold,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.white,
    paddingHorizontal: 54,
  },
  add: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
