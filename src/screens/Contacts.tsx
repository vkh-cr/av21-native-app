import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";
import TextContainer from "../components/TextContainer";

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
      <TextContainer>
        Pokud je cokoliv potřeba na organizátory, prosím obrať se na recepci na
        Stojanově. Díky! Pokud Ti není nejlépe, náš zdravotník je k dispozici.
        Pak volej Alžbětu Podolovou (telefon +420 774 344 542)
      </TextContainer>
    </View>
  );
}
