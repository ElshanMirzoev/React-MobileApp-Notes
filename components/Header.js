import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Header({ title, onBack, rightElement, onInfoPress }) {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.backBtn}>Назад</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.headerTitle}>{title}</Text>

      <View style={styles.rightContainer}>
        {}
        {rightElement
          ? rightElement
          : !onBack && (
              <TouchableOpacity onPress={onInfoPress} style={styles.infoBtn}>
                <Text style={styles.infoText}>ⓘ</Text>
              </TouchableOpacity>
            )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  leftContainer: {
    width: 50,
  },
  rightContainer: {
    width: 50,
    alignItems: "flex-end",
  },
  backBtn: {
    color: "#007AFF",
    fontWeight: "700",
    fontSize: 15,
  },
  infoBtn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 22,
    color: "#007AFF",
  },
});
