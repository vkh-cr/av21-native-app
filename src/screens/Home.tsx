import * as React from "react";
import { DrawerScreenProps, useIsDrawerOpen } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";

import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface HomeProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Home"> {}

export default function Home({ navigation }: HomeProps) {
  return (
    <View>
      <AppHeader title="Title" subtitle="subtitle" navigation={navigation} />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}