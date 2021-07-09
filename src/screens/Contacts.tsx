import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";

interface ContactsProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Contacts"> {}

export default function Contacts({ navigation }: ContactsProps) {
  return (
    <View>
      <AppHeader
        title="Kontakt"
        // subtitle="nevim"
        navigation={navigation}
      />
      <Text>Trolololo</Text>
    </View>
  );
}
