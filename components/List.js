import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { NoteItem } from "./NoteItem";

export default function List({ notes, onEdit, onDelete }) {
  return (
    <FlatList
      data={notes}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <NoteItem item={item} onEdit={onEdit} onDelete={onDelete} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: { paddingVertical: 0 },
});
