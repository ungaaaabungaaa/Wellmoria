// Login.js
import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

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

      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.registerText} onPress={() => navigation.navigate("Register")}>
        Don't have an account? <Text style={styles.link}>Register</Text>
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
  registerText: {
    marginTop: 20,
    textAlign: "center",
    color: "#5a2d0c",
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
