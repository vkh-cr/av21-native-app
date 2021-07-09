import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface HarmonogramProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Home"> {}

export default function Harmonogram({ navigation }: HarmonogramProps) {
  return (
    <View>
      <AppHeader
        title="Harmonogram"
        // subtitle="nevim"
        navigation={navigation}
      />
      <Text>Trolololo</Text>
    </View>
  );
}
