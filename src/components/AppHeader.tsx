import * as React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

interface AppHeaderProps<T extends string> {
  navBack?: boolean;
  title: string;
  subtitle?: string;
  navigation: DrawerNavigationProp<Record<string, object | undefined>, T>;
  children?: React.ReactNode;
  removeShadow?: boolean;
  color?: string,
}

export function AppHeader<T extends string>({
  title,
  subtitle,
  navigation,
  children,
  navBack,
  removeShadow,
  color,
}: AppHeaderProps<T>) {
  const handleMenuPress = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Appbar.Header
      theme={{
        dark: true,
        colors: {
          primary: color || "#1FAAAA",
          text: "#FFFFFF",
        },
      }}
      style={removeShadow && styles.withoutShadow}
    >
      {navBack ? ( 
        <Appbar.Action icon="chevron-left" onPress={handleBackPress} color={"#FFFFFF"}/>
      ) : (
        <Appbar.Action icon="menu" onPress={handleMenuPress} color={"#FFFFFF"}/>
      )}
      <Appbar.Content title={title} subtitle={subtitle} titleStyle={{color: "#FFFFFF"}} />
      {children}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  withoutShadow: {
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
});
