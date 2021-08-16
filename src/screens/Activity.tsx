import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import { AppHeader } from "../components/AppHeader";
import {
  Avatar,
  Chip,
  Divider,
  Headline,
  Paragraph,
  Title,
} from "react-native-paper";
import { StyleSheet } from "react-native";
import { useActivity } from "../hooks/useActivity";
import ActivityInfoPanel from "../components/ActivityInfo";
import { Box, ChevronRightIcon, Flex } from "native-base";
import { ActivityTypes } from "../types";
interface ActivityProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activity"> { }

export default function Activity({ navigation, route }: ActivityProps) {
  const params = route.params as { activityId: number };
  const activity = useActivity(params.activityId);
  const avatarWidth = Dimensions.get("window").width - 100;

  let presenterNames: string[] = [];
  activity?.presenter.forEach(({ firstName, lastName }) =>
    presenterNames.push(`${firstName} ${lastName}`)
  );
  const joinedNames = presenterNames.join(" + ");
  let activityColor: string;
  switch (activity?.type) {
    case ActivityTypes.VOLNOCAS:
      activityColor = "#FF5D3A";
      break;
    case ActivityTypes.PREDNASKA:
      activityColor = "#1FAAAA";
      break;
    case ActivityTypes.DUCHOVNI:
      activityColor = "#FFC700";
      break;
    default:
      activityColor = "#CECECE";
      break;
  }

  return (
    <>
        <AppHeader
          navBack
          title={activity?.title || "Aktivita"}
          // subtitle="nevim"
          navigation={navigation}
          removeShadow
          color={activityColor}
        />

          <LinearGradient
            colors={[activityColor, "#f0f0f0"]}
            style={styles.imageWrapper}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {activity?.image ? (
                <Avatar.Image
                  style={{ backgroundColor: "#f0f0f0" }}
                  size={avatarWidth}
                  source={activity.image}
                />
              ) : (
                <Avatar.Text
                  style={styles.avatarText}
                  size={avatarWidth}
                  labelStyle={{
                    letterSpacing: -2,
                    fontFamily: "HammersmithOne",
                  }}
                  label={`${activity?.title.substring(
                    0,
                    1
                  )}`}
                />
              )}
            </View>
          </LinearGradient>
          <ScrollView style={styles.scrollView}>
            <Headline style={{ fontFamily: "HammersmithOne" }}>
              {activity?.title || ""}
            </Headline>
            <ActivityInfoPanel
              icon="calendar"
              text={`BLOK ${activity?.block}`}
            />
            <ActivityInfoPanel icon="map" text={`${activity?.location}`} />
            {activity?.presenter.map((presenter, key) => (
              <Pressable
                key={key}
                onPress={() =>
                  navigation.navigate("Presenter", {
                    presenterId: presenter.id,
                  })
                }
              >
                <Flex style={styles.activityBox}>
                  <View style={{ marginTop: 5, flex: 10 }}>
                    <ActivityInfoPanel icon="account" text={joinedNames}/>
                  </View>
                  <Box marginLeft={"auto"} style={{ marginTop: 5, flex: 1 }}>
                    <ChevronRightIcon />
                  </Box>
                </Flex>
              </Pressable>
            ))}
            <Divider />
            <Title>Anotace</Title>
            <Paragraph>{activity?.description}</Paragraph>
          </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  imageWrapper: {
    height: Dimensions.get("window").width,
    backgroundColor: "#056970",
    position: "relative",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  scrollView: {
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  image: {
    zIndex: 1,
    flex: 1,
    // resizeMode: 'contain',
  },
  bottomView: {
    height: "100%",
    marginTop: 0,
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
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

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  badge: {
    alignSelf: "center",
    marginTop: 5,
  },
  activityBox: {
    flexDirection: "row",
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: "HammersmithOne",
    backgroundColor: "#EEEEEE",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
