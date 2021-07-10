import * as React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useCallback } from "react";
import { Appbar } from "react-native-paper";

interface AppHeaderProps<T extends string> {
  navBack?: boolean;
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
  navBack,
}: AppHeaderProps<T>) {
  const handleMenuPress = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Appbar.Header>
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
