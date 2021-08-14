import * as React from "react";
import { Dimensions, Animated, Pressable } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Box } from "native-base";
import { AppHeader } from "../components/AppHeader";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { ProgramBlock } from "../components/ProgramBlock";

interface ProgramProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Program"> { }

export default function Harmonogram({ navigation }: ProgramProps) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "ctvrtek", title: "Čtvrtek" },
    { key: "patek", title: "Pátek" },
    { key: "sobota", title: "Sobota" },
    { key: "nedele", title: "Neděle" },
  ]);

  const FirstDayRoute = () => <ProgramBlock day={0} navigation={navigation} />;
  const SecondDayRoute = () => <ProgramBlock day={1} navigation={navigation} />;
  const ThirdDayRoute = () => <ProgramBlock day={2} navigation={navigation} />;
  const FourDayRoute = () => <ProgramBlock day={3} navigation={navigation} />;

  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    ctvrtek: FirstDayRoute,
    patek: SecondDayRoute,
    sobota: ThirdDayRoute,
    nedele: FourDayRoute,
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
                  console.log(i);
                  setIndex(i);
                }}
              >
                <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
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
        title="Harmonogram"
        // subtitle="nevim"
        navigation={navigation}
      />
      <TabView
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
