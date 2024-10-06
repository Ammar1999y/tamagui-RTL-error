import React from "react";
import "react-native-gesture-handler";
import { TamaguiProvider, createTamagui } from "tamagui";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import appConfig from "@/tamagui.config";
const config = createTamagui(appConfig);
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </TamaguiProvider>
  );
}
