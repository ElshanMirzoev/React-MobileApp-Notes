import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNotes } from "./components/useNotes";
import ListScreen from "./components/ListScreen";
import EditScreen from "./components/EditScreen";
import { COLORS } from "./constants/colors";

export default function App() {
  const { notes, addOrUpdateNote, deleteNote } = useNotes();
  const [activeNote, setActiveNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const openEditor = (note = null) => {
    setActiveNote(note || { id: Date.now().toString(), title: "", text: "" });
    setIsEditing(true);
  };

  const handleSave = () => {
    addOrUpdateNote(activeNote);
    setIsEditing(false);
  };

  const confirmDelete = (id) => {
    Alert.alert("Удалить?", "Заметка будет удалена", [
      { text: "Отмена" },
      { text: "Удалить", onPress: () => deleteNote(id) },
    ]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        {isEditing ? (
          <EditScreen
            note={activeNote}
            onChange={setActiveNote}
            onSave={handleSave}
            onBack={() => setIsEditing(false)}
          />
        ) : (
          <ListScreen
            notes={notes}
            onAdd={() => openEditor()}
            onEdit={openEditor}
            onDelete={confirmDelete}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
