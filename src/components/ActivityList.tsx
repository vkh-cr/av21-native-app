import * as React from "react";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { Avatar, List } from "react-native-paper";
import { useStaticData } from "../hooks/useStaticData";
import { ActivityTypes } from "../types";

interface ActivityListProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Program"> {
  type: ActivityTypes;
}

export default function ActivityList({ type, navigation }: ActivityListProps) {
  const staticData = useStaticData();
  let activityColor: string;
  switch (type) {
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
    <ScrollView style={styles.scrollView}>
      {staticData.data.activities
        .filter((activity) => activity.type === type)
        .map((activity, index) => (
          <List.Item
            style={{ ...styles.listItem, borderLeftColor: activityColor }}
            key={index}
            onPress={() =>
              navigation.navigate("Activity", { activityId: activity.id })
            }
            left={(props) => {
              return  <Avatar.Image size={50} source={activity.image} />
            }}
            right={(props) => {
              return <List.Icon {...props} icon="chevron-right" />;
            }}
            title={`${activity.title}`}
            titleStyle={styles.title}
            description={`${activity.description.substring(0, 100)} ...`}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {},
  scrollView: {
    height: "100%",
  },
  surface: {
    width: 46,
    height: 46,
    padding: 8,
    borderRadius: 23,
    elevation: 4,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 0,
    borderLeftWidth: 3,
    margin: 5,
  },
  title: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
  },
});
