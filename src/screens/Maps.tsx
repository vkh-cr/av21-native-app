import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { AppHeader } from "../components/AppHeader";
// import { WebView } from 'react-native-webview';
interface MapsProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Maps"> {}

export default function Maps({ navigation }: MapsProps) {
  return (
    <>
      <AppHeader
        title="Mapy"
        // subtitle="nevim"
        navigation={navigation}
      />
      {/* <WebView source={{ uri: 'https://registrace.absolventskyvelehrad.cz' }} />; */}
    </>
  );
}
