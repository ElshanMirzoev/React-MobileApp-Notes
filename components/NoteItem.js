import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import { formatDate } from "./dateFormatter";

export const NoteItem = ({ item, onEdit, onDelete }) => (
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

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    width: "100%",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.noteMain,
  },
  date: {
    fontSize: 11,
    color: COLORS.datetime,
    marginTop: 2,
  },
  deleteBtn: {
    padding: 10,
  },
  deleteText: {
    color: COLORS.danger,
    fontSize: 18,
  },
});
