import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
// import {plantdetail} from "./plantdetail";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      <Stack.Screen name="plantdetail" options={{ headerShown: false }} />
      <Stack.Screen name="neonpothos" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
