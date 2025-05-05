// Register.js
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#8b5e3c"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#8b5e3c"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={registerHandler}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7d2b7",
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#5a2d0c",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#5a2d0c",
    backgroundColor: "#fff4ec",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    color: "#5a2d0c",
  },
  button: {
    backgroundColor: "#5a2d0c",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#f7d2b7",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: "#5a2d0c",
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
