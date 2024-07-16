import { Stack } from "expo-router";
// import {plantdetail} from "./plantdetail";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:true}}/>
      <Stack.Screen name="plantdetail" options={{ headerShown: true }} />
    </Stack>
  );
}
