import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-paper";

export interface TextContainerProps {
  children: React.ReactChild;
}

export default function TextContainer({ children }: TextContainerProps) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 16,
    lineHeight: 21,
  },
});
