// app/index.js (or index.tsx if using TypeScript)

import Login from "@/app/login";
import Profile from "@/app/profile";
import Register from "@/app/register";
import { auth } from "@/firebaseConfig";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Mulish_700Bold, useFonts } from "@expo-google-fonts/mulish";

const Stack = createNativeStackNavigator();

export default function Index() {
  const [fontsLoaded] = useFonts({ Mulish_700Bold });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (!fontsLoaded || loading) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Profile" component={Profile} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}
