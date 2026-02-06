import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { formatDate } from "./DateFormat";

export default function List({ notes, onEdit, onDelete }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.noteItem}
      onPress={() => onEdit(item)}
      activeOpacity={0.7}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title?.trim() || "Без названия"}
        </Text>
        <Text style={styles.date}>{formatDate(item.updatedAt)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteBtn}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={notes}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: { paddingVertical: 0 },
  noteItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    width: "100%",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  date: {
    fontSize: 11,
    color: "#AAA",
    marginTop: 2,
  },
  deleteBtn: {
    padding: 10,
  },
  deleteText: {
    color: "#FF3B30",
    fontSize: 18,
  },
});
