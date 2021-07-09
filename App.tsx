import * as React from "react";
import {
  DefaultTheme,
  Colors,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import AvDrawer from "./src/components/AvDrawer";

import Home from "./src/screens/Home";

export default function Main() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.cyanA400,
      accent: Colors.amber100,
    },
  };

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AvDrawer />
      </PaperProvider>
    </NavigationContainer>
  );
}
