import * as React from "react";

import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AvDrawer from "./src/components/AvDrawer";
import { useNews } from "./src/hooks/useNews";
import { useEffect } from "react";

export default function Main() {
  const { syncNews } = useNews();

  const [loaded] = useFonts({
    HammersmithOne: require("./assets/fonts/HammersmithOne-Regular.ttf"),
  });

  useEffect(() => {
    syncNews();
  }, []);

  if (!loaded) {
    return null;
  }

  const theme = extendTheme({
    colors: {
      primary: {100: "#056970"},
    },
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <AvDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
