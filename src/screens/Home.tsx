import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";

import { ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { useNews } from "../hooks/useNews";
import { Appbar, Card, Text } from "react-native-paper";
import { useCallback } from "react";

interface HomeProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Home"> {}

export default function Home({ navigation }: HomeProps) {
  const { news, refreshNews } = useNews();

  const handleRefresh = useCallback(() => {
    refreshNews();
  }, [refreshNews]);

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <AppHeader
        title="Absolventský Velehrad 2021"
        // subtitle="subtitle"
        navigation={navigation}
      >
        <Appbar.Action icon="refresh" onPress={handleRefresh} />
      </AppHeader>
      {news.data.map((item, index) => (
        <Card key={index} style={{ padding: 10, margin: 10 }}>
          {item.image !== "" && (
            <Card.Cover
              source={{
                uri: `data:image/png;base64, ${item.image}`,
              }}
            />
          )}
          <Card.Title title={item.title} />
          <Card.Content>
            <Text>{item.description}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
