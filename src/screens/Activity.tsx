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
import petrGlosar from "../../assets/presenters/petr-glogar.png";
import ActivityInfoPanel from "../components/ActivityInfo";
interface ActivityProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activity"> {}

export default function Activity({ navigation, route }: ActivityProps) {
  const params = route.params as { activityId: string };
  const activity = useActivity(params.activityId);
  console.log(Dimensions.get("window").width / 2);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AppHeader
          navBack
          title={activity?.title || "Aktivita"}
          // subtitle="nevim"
          navigation={navigation}
          removeShadow
        />
        <View>
          <LinearGradient
            colors={["rgba(255,255,255, 0)", "rgba(31,170,170, 1)"]}
            style={styles.imageWrapper}
          >
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Image
                source={petrGlosar}
                style={{
                  ...styles.image,
                  width: Dimensions.get("window").width / 2,
                  height: Dimensions.get("window").width,
                }}
              />
            </View>

            <View style={styles.textContainer}>
              <Headline
                style={{ color: "white", fontFamily: "HammersmithOne" }}
              >
                {activity?.presenter.firstName}{" "}
              </Headline>
              <Headline
                style={{ color: "white", fontFamily: "HammersmithOne" }}
              >
                {activity?.presenter.lastName}
              </Headline>
            </View>
          </LinearGradient>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Headline style={{ fontFamily: "HammersmithOne" }}>
              {activity?.title || ""}
            </Headline>
            <ActivityInfoPanel icon="calendar" text={`${activity?.date}`} />
            <ActivityInfoPanel icon="map" text={`${activity?.location}`} />
            <ActivityInfoPanel
              icon="account"
              text={`${activity?.presenter.firstName} ${activity?.presenter.lastName}`}
            />
            <Divider />
            <Title>Anotace</Title>
            <Paragraph>{activity?.description}</Paragraph>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
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
  avatar: {
    shadowRadius: 2,
    shadowColor: "gray",
  },
});
