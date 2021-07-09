import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface PresentersProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Presenters"> {}

export default function Presenters({ navigation }: PresentersProps) {
  return (
    <View>
      <AppHeader
        title="Přednášející"
        // subtitle="nevim"
        navigation={navigation}
      />
      <Text>Trolololo</Text>
    </View>
  );
}
