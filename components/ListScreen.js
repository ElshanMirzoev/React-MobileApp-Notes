import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Header from "./Header";
import List from "./List";
import Info from "./Info";

export default function ListScreen({ notes, onAdd, onEdit, onDelete }) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  return (
    <View style={styles.fullFlex}>
      <Header title="Заметки" onInfoPress={() => setIsInfoVisible(true)} />

      <List notes={notes} onEdit={onEdit} onDelete={onDelete} />

      <TouchableOpacity style={styles.plus} onPress={onAdd}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>

      <Info visible={isInfoVisible} onClose={() => setIsInfoVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
  plus: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  plusText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
  },
});
