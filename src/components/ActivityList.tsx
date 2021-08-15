import * as React from "react";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { useStaticData } from "../hooks/useStaticData";
import { ActivityTypes } from "../types";

interface ActivityListProps extends DrawerScreenProps<Record<string, object | undefined>, "Program"> {
  type: ActivityTypes;
}

export default function ActivityList({ type, navigation }: ActivityListProps) {
  const staticData = useStaticData();

  return (<ScrollView style={styles.scrollView}>
    {staticData.data.activities.filter((activity) => activity.type === type).map((activity, index) => (
      <List.Item
        key={index}
        onPress={() =>
          navigation.navigate("Activity", { activityId: activity.id })
        }
        right={(props) => {
          return <List.Icon {...props} icon="chevron-right" />;
        }}
        title={`${activity.title}`}
        description={`${activity.description.substring(0, 100)} ...`}
      />
    ))}
  </ScrollView>)
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
});
