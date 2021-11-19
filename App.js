import { Icon } from "react-native-elements";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
} from "react-native";
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "./components/TodoList";
import AddListModal from "./components/AddListModal";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderList = (list) => {
    return <TodoList list={list} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal closeModal={() => this.toggleAddTodoModal()} />
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />

          <Image
            style={styles.title}
            source={require("./assets/gitdonelogowd.png")}
          />

          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList}>
            <Icon
              name="plus"
              type="font-awesome"
              color={colors.gold}
              onPress={() => this.toggleAddTodoModal()}
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
            renderItem={({ item }) => this.renderList(item)}
          />
        </View>
        <Image
          style={{ width: 100, height: 100, marginTop: 50, marginBottom: 0 }}
          source={require("./assets/logo.png")}
        />
        <Text style={{ color: Colors.white, fontSize: 10 }}>
          Made For Developers
        </Text>
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
    width: 250,
    height: 80,
    paddingHorizontal: 54,
  },
  add: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
