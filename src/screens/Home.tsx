import * as React from "react";
import { DrawerScreenProps, useIsDrawerOpen } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";

import { ScrollView, StyleSheet, View } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { useNews } from "../hooks/useNews";
import { Appbar, Card, Text } from "react-native-paper";
interface HomeProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Home"> { }

export default function Home({ navigation }: HomeProps) {
  const news = useNews()

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <AppHeader title="Title" subtitle="subtitle" navigation={navigation}> </AppHeader>
      { news.map((item, index) =>
        <Card key={index} style={{padding: 10, margin: 10}}>
          <Card.Title title={item.title} />
          <Card.Content>
            <Text>{item.description}</Text>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}
