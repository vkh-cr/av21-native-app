import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, ScrollView, Image, Text } from "react-native";
import { AppHeader } from "../components/AppHeader";
import {
  Avatar,
  Chip,
  Divider,
  Headline,
  Paragraph,
  Surface,
  Title,
} from "react-native-paper";
import { StyleSheet } from "react-native";
import { useActivity } from "../hooks/useActivity";
import default_logo from "../../assets/activity_default.png";
import ActivityInfoPanel from "../components/ActivityInfo";
interface ActivityProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activity"> {}

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
        removeShadow={activity?.image ? false : true}
      />
      <View>
        <Image source={default_logo} style={styles.image} />
        <View style={styles.bottomView}>
          <View style={styles.headlineContainer}>
            <Headline style={styles.headline}>{activity?.title || ""}</Headline>
          </View>
          <ActivityInfoPanel icon="calendar" text={`${activity?.date}`} />
          <ActivityInfoPanel icon="map" text={`${activity?.location}`} />
          <ActivityInfoPanel
            icon="account"
            text={`${activity?.presenter.firstName} ${activity?.presenter.lastName}`}
          />
          <Divider />
          <Title>Anotace</Title>
          <View style={styles.scrollViewContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <Paragraph>{activity?.description}</Paragraph>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: { flex: 1 },
  scrollView: {},
  image: {
    width: "100%",
    height: "25%",
    backgroundColor: "#056970",
    marginBottom: -125,
    zIndex: 2,
  },
  bottomView: {
    height: "100%",
    marginTop: 0,
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#FFF",
    zIndex: 3,
  },
  headlineContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headline: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: "600",
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
