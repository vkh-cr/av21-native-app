import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import DrawerContent from "./DrawerContent";
import Harmonogram from "../screens/Harmonogram";

const Drawer = createDrawerNavigator();

export default function AvDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Harmonogram" component={Harmonogram} />
    </Drawer.Navigator>
  );
}
