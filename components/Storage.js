import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@notes_v8";

export function Storage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      setNotes(JSON.parse(data));
    } else {
      const firstNote = {
        id: "1",
        title: "Добро пожаловать",
        text: "Здесь вы можете ввести свои заметки",
        updatedAt: Date.now(),
      };
      saveData([firstNote]);
    }
  };

  const saveData = async (newList) => {
    const sortedList = [...newList].sort((a, b) => b.updatedAt - a.updatedAt);
    setNotes(sortedList);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sortedList));
  };

  const addOrUpdateNote = (note) => {
    const noteToSave = { ...note, updatedAt: Date.now() };
    const exists = notes.find((n) => n.id === note.id);
    const newList = exists
      ? notes.map((n) => (n.id === note.id ? noteToSave : n))
      : [noteToSave, ...notes];
    saveData(newList);
  };

  const deleteNote = (id) => {
    saveData(notes.filter((n) => n.id !== id));
  };

  return {
    notes,
    addOrUpdateNote,
    deleteNote,
  };
}
