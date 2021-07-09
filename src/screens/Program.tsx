import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface ProgramProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Program"> {}

export default function Program({ navigation }: ProgramProps) {
  return (
    <View>
      <AppHeader
        title="Duchovní program"
        // subtitle="nevim"
        navigation={navigation}
      />
      <Text>Trolololo</Text>
    </View>
  );
}
