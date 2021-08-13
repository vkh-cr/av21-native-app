import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View, StyleSheet, ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { useStaticData } from "../hooks/useStaticData";
import { TextTypes } from "../types";

interface InfoProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Contacts"> {}

export default function Info({ navigation }: InfoProps) {
  const staticData = useStaticData();

  return (
    <View>
      <AppHeader
        title="Informace"
        // subtitle="nevim"
        navigation={navigation}
      />
      <ScrollView>
        {staticData.data.info.map((information, index) => {
          if (information.type == TextTypes.NADPIS) {
            return (
              <Text key={index} style={styles.nadpis}>
                {information.text}
              </Text>
            );
          }
          if (information.type == TextTypes.TEXT) {
            return (
              <Text key={index} style={styles.text}>
                {information.text}
              </Text>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  nadpis: {
    padding: 10,
    paddingBottom: 5,
    paddingTop: 15,
    fontSize: 20,
    fontFamily: "HammersmithOne",
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 21,
  },
});
