import * as React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useCallback } from "react";
import { Appbar } from "react-native-paper";

interface AppHeaderProps<T extends string> {
  title: string;
  subtitle?: string;
  navigation: DrawerNavigationProp<Record<string, object | undefined>, T>;
  children?: React.ReactNode;
}

export function AppHeader<T extends string>({
  title,
  subtitle,
  navigation,
  children,
}: AppHeaderProps<T>) {
  const handleMenuPress = useCallback(() => {
    navigation.toggleDrawer();
  }, []);

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={handleMenuPress} />
      <Appbar.Content title={title} subtitle={subtitle} />
      {children}
    </Appbar.Header>
  );
}
