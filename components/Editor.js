import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Editor({ note, onChange }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.editor}>
        <TextInput
          style={styles.titleInput}
          placeholder="Заголовок"
          placeholderTextColor="#AAA"
          value={note.title}
          onChangeText={(val) => onChange({ ...note, title: val })}
        />
        <TextInput
          style={styles.bodyInput}
          placeholder="Текст заметки"
          placeholderTextColor="#AAA"
          multiline
          value={note.text}
          onChangeText={(val) => onChange({ ...note, text: val })}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  editor: { flex: 1, padding: 20 },
  titleInput: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 15,
    padding: 0,
  },
  bodyInput: {
    fontSize: 18,
    color: "#333",
    lineHeight: 26,
    textAlignVertical: "top",
    minHeight: 300,
    padding: 0,
  },
});
