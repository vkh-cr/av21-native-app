import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import {
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { AppHeader } from "../components/AppHeader";
import { SceneMap, TabView } from "react-native-tab-view";
import { Box, Text } from "native-base";
import Animated from "react-native-reanimated";
import ActivityList from "../components/ActivityList";
import { ActivityTypes } from "../types";

interface ActivitiesProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Activities"> {}

export default function Activities({ navigation }: ActivitiesProps) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "duchovni", title: "Duchovní" },
    { key: "prednasky", title: "Přednášky" },
    { key: "volnocas", title: "Workshopy" },
  ]);

  const DuchovniRoute = () => (
    <ActivityList type={ActivityTypes.DUCHOVNI} navigation={navigation} />
  );
  const PrednaskyRoute = () => (
    <ActivityList type={ActivityTypes.PREDNASKA} navigation={navigation} />
  );
  const VolnocasRoute = () => (
    <ActivityList type={ActivityTypes.VOLNOCAS} navigation={navigation} />
  );

  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    duchovni: DuchovniRoute,
    prednasky: PrednaskyRoute,
    volnocas: VolnocasRoute,
  });

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <Box flex={1} alignItems="center" p={2}>
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Text>{route.title}</Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <>
      <AppHeader
        title="Aktivity"
        // subtitle="nevim"
        navigation={navigation}
      />
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: 10 }}
      />
    </>
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
