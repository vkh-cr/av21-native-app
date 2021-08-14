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
}

export function AppHeader<T extends string>({
  title,
  subtitle,
  navigation,
  children,
  navBack,
  removeShadow,
}: AppHeaderProps<T>) {
  const handleMenuPress = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Appbar.Header theme={{
      dark: true,
      colors: {
        primary: "#1FAAAA",
        text: "white"
      },
    }}style={removeShadow && styles.withoutShadow}>
      {navBack ? (
        <Appbar.Action icon="chevron-left" onPress={handleBackPress} />
      ) : (
        <Appbar.Action icon="menu" onPress={handleMenuPress} />
      )}
      <Appbar.Content title={title} subtitle={subtitle} />
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
