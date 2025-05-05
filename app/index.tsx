import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 20 }}>Welcome! Choose an option:</Text>
      <Button title="Login" onPress={() => router.push("/login")} />
      <View style={{ height: 10 }} />
      <Button title="Register" onPress={() => router.push("/register")} />
      <View style={{ height: 10 }} />
      <Button title="Profile" onPress={() => router.push("/profile")} />
    </View>
  );
}
