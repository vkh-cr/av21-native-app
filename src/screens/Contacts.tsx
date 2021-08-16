import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import * as Linking from 'expo-linking';

import { Text, View, StyleSheet } from "react-native";
import { AppHeader } from "../components/AppHeader";
import TextContainer from "../components/TextContainer";
import { Button } from "native-base";

interface ContactsProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Contacts"> { }

export default function Contacts({ navigation }: ContactsProps) {
  return (
    <View>
      <AppHeader
        title="Kontakt"
        // subtitle="nevim"
        navigation={navigation}
      />
      <View style={styles.container}>
        <TextContainer>
          Pokud je cokoliv potřeba na organizátory, prosím obrať se na recepci na
          Stojanově. Díky! Pokud Ti není nejlépe, náš zdravotník je Ti k dispozici.
          Pak volej Alžbětu.
        </TextContainer>
        <Button backgroundColor={"#1FAAAA"}  onPress={() => Linking.openURL('tel:+420774344542')}>Volej zdravotníkovi</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})