import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, ScrollView, Image, Text } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { Avatar, Chip, Divider, Headline, Paragraph, Surface, Title } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useActivity } from "../hooks/useActivity";
import default_logo from "../../assets/activity_default.png"
import ActivityInfoPanel from "../components/ActivityInfo";
interface ActivityProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activity"> { }

export default function Activity({ navigation, route }: ActivityProps) {
  const params = route.params as { activityId: string };
  const activity = useActivity(params.activityId);

  return (
    <View>
      <AppHeader
        navBack
        title={activity?.title || "Aktivita"}
        // subtitle="nevim"
        navigation={navigation}
        removeShadow
      />
      <View>
        <Image source={default_logo} style={styles.image} />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Headline>{activity?.title || ""}</Headline>
          <ActivityInfoPanel icon="calendar" text={`${activity?.date}`} />
          <ActivityInfoPanel icon="map" text={`${activity?.location}`} />
          <ActivityInfoPanel icon="account" text={`${activity?.presenter.firstName} ${activity?.presenter.lastName}`} />
          <Divider />
          <Title>Anotace</Title>
          <Paragraph>
            {activity?.description}
          </Paragraph>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    backgroundColor: "#056970",
    marginBottom: -125,
    zIndex: 1,
  },
  scrollView: {
    height: "100%",
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    // alignItems: "center",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#FFF",
    zIndex: 2,
  },
  headline: {
    marginTop: 20,
  },
  paragraph: {
    marginTop: 20,
  },
  activities: {
    marginTop: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    alignSelf: "center",
    marginTop: 5,
  },
  avatar: {
    shadowRadius: 2,
    shadowColor: "gray",
  },
  surface: {
    padding: 8,
    width: 264,
    height: 264,
    borderRadius: 132,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
