import * as React from "react";
import {
  DefaultTheme,
  Colors,
  Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import AvDrawer from "./src/components/AvDrawer";
import { useNews } from "./src/hooks/useNews";
import { useEffect } from "react";

export default function Main() {
  const { syncNews } = useNews();

  useEffect(() => {
    syncNews();
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#056970",
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
