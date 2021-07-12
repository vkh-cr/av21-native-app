import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, StyleSheet, ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { Avatar, List, Surface } from "react-native-paper";
import { useStaticData } from "../hooks/useStaticData";

interface ActivitiesProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activities"> {}

export default function Activities({ navigation }: ActivitiesProps) {
  const staticData = useStaticData();
  return (
    <View>
      <AppHeader
        title="Aktivity"
        // subtitle="nevim"
        navigation={navigation}
      />
      <ScrollView style={styles.scrollView}>
        {staticData.data.activities.map((activity, index) => (
            <List.Item
            key={index}
            onPress={() =>
              navigation.navigate("Activity", { activityId: activity.id })
            }
            right={(props) => {
              return <List.Icon {...props} icon="chevron-right" />;
            }}
            title={`${activity.title}`}
            description={`${activity.description.substring(0,100)}}...`}
          />
        ))}
      </ScrollView>
    </View>
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
});
