import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import DrawerContent from "./DrawerContent";
import Harmonogram from "../screens/Harmonogram";
import Activities from "../screens/Activities";
import Contacts from "../screens/Contacts";
import Maps from "../screens/Maps";
import Presenters from "../screens/Presenters";
import DuchovniProgram from "../screens/DuchovniProgram";
import Presenter from "../screens/Presenter";
import Activity from "../screens/Activity";
import Info from "../screens/Info";
import Modlitby from "../screens/Modlitby";

const Drawer = createDrawerNavigator();

export default function AvDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Harmonogram" component={Harmonogram} />
      <Drawer.Screen name="DuchovniProgram" component={DuchovniProgram} />
      <Drawer.Screen name="Modlitby" component={Modlitby} />
      <Drawer.Screen name="Presenters" component={Presenters} />
      <Drawer.Screen name="Activities" component={Activities} />
      <Drawer.Screen name="Maps" component={Maps} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Presenter" component={Presenter} />
      <Drawer.Screen name="Activity" component={Activity} />
      <Drawer.Screen name="Info" component={Info} />
    </Drawer.Navigator>
  );
}
