import * as React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { Appbar } from "react-native-paper";

interface AppHeaderProps<T extends string> {
  title: string;
  subtitle?: string;
  navigation: DrawerNavigationProp<Record<string, object | undefined>, T>;
}

export const AppHeader = <T extends string>({
  title,
  subtitle,
  navigation,
}: AppHeaderProps<T>) => {
  const handleMenuPress = useCallback(() => {
    navigation.toggleDrawer();
  }, []);

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={handleMenuPress} />
      <Appbar.Content title={title} subtitle={subtitle} />
    </Appbar.Header>
  );
};
