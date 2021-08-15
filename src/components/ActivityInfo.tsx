import { DrawerNavigationProp } from "@react-navigation/drawer";
import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-paper";

export interface ActivityInfoPanelProps {
  icon: string;
  text: string;
}

export default function ActivityInfoPanel({
  icon,
  text,
}: ActivityInfoPanelProps) {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Avatar.Icon
          size={44}
          icon={icon}
          color={"white"}
          style={styles.avatar}
        />
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    height: 54,
  },
  icon: {
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: "#FF5D3A",
  },
  text: {
    fontFamily: "HammersmithOne",
    padding: 10,
    lineHeight: 44,
    textAlign: "center",
    fontSize: 24,
  },
});
