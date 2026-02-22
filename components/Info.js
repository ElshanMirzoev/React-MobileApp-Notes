import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

export default function Info({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.infoCard}>
          <Text style={styles.title}>О приложении</Text>
          <View style={styles.divider} />

          <Text style={styles.label}>Разработчик:</Text>
          <Text style={styles.value}>Эльшан Мирзоев</Text>

          <Text style={styles.label}>Версия:</Text>
          <Text style={styles.value}>1.1.0 (Stable)</Text>

          <Text style={styles.label}>Год разработки:</Text>
          <Text style={styles.value}>2026</Text>

          <Text style={styles.label}>Дополнительная информация:</Text>
          <Text style={styles.value}>
            Приложение создано в рамках задания по стажёрской программе IT HUB
            «Северстали»
          </Text>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "center",
    alignItems: "center",
  },
  infoCard: {
    width: "80%",
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    borderRadius: 20,
    padding: 25,
    alignItems: "flex-start",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.black,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.divider,
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: COLORS.textspec,
    marginTop: 10,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 15,
    color: COLORS.noteMain,
    fontWeight: "500",
  },
  closeBtn: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: COLORS.blue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  closeBtnText: {
    color: COLORS.white,
  },
});
