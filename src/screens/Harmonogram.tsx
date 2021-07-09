import * as React from "react";
import { DrawerScreenProps, useIsDrawerOpen } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";

import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface HarmonogramProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Home"> {}

export default function Harmonogram({ navigation }: HarmonogramProps) {
  return (
    <View>
      <AppHeader title="Harmonogram" subtitle="nevim" navigation={navigation} />
      <Text>Trolololo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
