import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface MapsProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Maps"> {}

export default function Maps({ navigation }: MapsProps) {
  return (
    <View>
      <AppHeader
        title="Mapy"
        // subtitle="nevim"
        navigation={navigation}
      />
      <Text>Trolololo</Text>
    </View>
  );
}
