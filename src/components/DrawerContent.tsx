import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { StyleSheet, View, Image } from "react-native";
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import logo from "../../assets/logo-drawer.png";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = props.navigation;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerLogoSection}>
          <Image source={logo} style={{ width: 100, height: 130 }} />
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )}
            label="Domů"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="information-outline"
                color={color}
                size={size}
              />
            )}
            label="Info"
            onPress={() => {
              navigation.navigate("Info");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="format-list-numbered"
                color={color}
                size={size}
              />
            )}
            label="Harmonogram"
            onPress={() => {
              navigation.navigate("Harmonogram");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            )}
            label="Duchovní program"
            onPress={() => {
              navigation.navigate("DuchovniProgram");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="heart-outline" color={color} size={size} />
            )}
            label="Modlitby"
            onPress={() => {
              navigation.navigate("Modlitby");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-multiple"
                color={color}
                size={size}
              />
            )}
            label="Přednášející"
            onPress={() => {
              navigation.navigate("Presenters");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="pulse" color={color} size={size} />
            )}
            label="Aktivity"
            onPress={() => {
              navigation.navigate("Activities");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} />
            )}
            label="Mapy"
            onPress={() => {
              navigation.navigate("Maps");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="contacts"
                color={color}
                size={size}
              />
            )}
            label="Kontakt"
            onPress={() => {
              navigation.navigate("Contacts");
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerLogoSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
