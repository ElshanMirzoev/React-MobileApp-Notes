import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Header from "./Header";
import Editor from "./Editor";
import { COLORS } from "../constants/colors";

export default function EditScreen({ note, onChange, onSave, onBack }) {
  return (
    <View style={styles.fullFlex}>
      <Header
        title=""
        onBack={onBack}
        rightElement={
          <TouchableOpacity onPress={onSave}>
            <Text style={styles.doneBtn}>Готово</Text>
          </TouchableOpacity>
        }
      />
      <Editor note={note} onChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
  doneBtn: {
    color: COLORS.blue,
    fontWeight: "700",
    fontSize: 15,
  },
});
