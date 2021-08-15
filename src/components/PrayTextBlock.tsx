import * as React from "react";

import { Text, View, StyleSheet, ScrollView } from "react-native";
import { InfoData, TextTypes } from "../types";

interface DuchovniProgramProps {
    sections: InfoData[]
    children?: React.ReactChild
}

export default function PrayTextBlock({ sections, children }: DuchovniProgramProps) {
    return (
    <>
      <ScrollView>
        {sections.map((information, index) => {
          if (information.type == TextTypes.NADPIS) {
            
            return (
              <Text key={index} style={{...styles.nadpis}}>
                {information.text}
              </Text>
            );
          }
          if (information.type == TextTypes.BIG_NADPIS) {
            const paddingTop = index === 0 ? 10 : 35;
            return (
              <Text key={index} style={{...styles.bigNadpis, paddingTop: paddingTop}}>
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
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  nadpis: {
    padding: 10,
    paddingBottom: 5,
    paddingTop: 15,
    fontSize: 20,
    fontFamily: "HammersmithOne",
    color: "#1FAAAA"
  },
  bigNadpis: {
    padding: 10,
    paddingBottom: 0,
    paddingTop: 35,
    fontSize: 30,
    fontFamily: "HammersmithOne",
    color: "#FF5D3A"
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 22,
  },
});
