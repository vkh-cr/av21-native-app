import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface ActivitiesProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activities"> {}

export default function Activities({ navigation }: ActivitiesProps) {
  return (
    <View>
      <AppHeader
        title="Aktivity"
        // subtitle="nevim"
        navigation={navigation}
      />
      <Text>Trolololo</Text>
    </View>
  );
}
