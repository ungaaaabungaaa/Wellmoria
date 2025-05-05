// Profile.js
import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "@/firebaseConfig";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome {auth.currentUser?.email}</Text>
      <Button title="Logout" onPress={() => auth.signOut()} />
    </View>
  );
}
