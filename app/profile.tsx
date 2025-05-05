// Profile.js
import { auth } from "@/firebaseConfig";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.email}>{auth.currentUser?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7d2b7",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 28,
    color: "#5a2d0c",
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: "#5a2d0c",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#5a2d0c",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#f7d2b7",
    fontWeight: "bold",
    fontSize: 16,
  },
});
