import { Mulish_700Bold, useFonts } from "@expo-google-fonts/mulish";
import { Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Mulish_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or <AppLoading /> if you're using the older package
  }

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Wellmoria</Text>
    </View>
  );
}

const containerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f7d2b7", // Light brown background
};

const textStyle = {
  fontSize: 48,
  fontFamily: "Mulish_700Bold",
  color: "#c6a792", // Dark black text
};
