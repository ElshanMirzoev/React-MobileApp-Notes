import React from "react";
import {
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { COLORS } from "../constants/colors";

export default function Editor({ note, onChange }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.editor}>
        <TextInput
          style={styles.titleInput}
          placeholder="Заголовок"
          placeholderTextColor={COLORS.textSecondary}
          value={note.title}
          onChangeText={(val) => onChange({ ...note, title: val })}
        />
        <TextInput
          style={styles.bodyInput}
          placeholder="Текст заметки"
          placeholderTextColor={COLORS.textSecondary}
          multiline
          value={note.text}
          onChangeText={(val) => onChange({ ...note, text: val })}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  editor: { flex: 1, padding: 20 },
  titleInput: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 15,
  },
  bodyInput: {
    fontSize: 18,
    color: COLORS.noteMain,
    lineHeight: 26,
    textAlignVertical: "top",
    minHeight: 300,
  },
});
