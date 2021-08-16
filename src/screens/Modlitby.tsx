import * as React from "react";
import { Dimensions, Animated, Pressable } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Box } from "native-base";
import { AppHeader } from "../components/AppHeader";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { ProgramBlock } from "../components/ProgramBlock";
import PrayTextBlock from "../components/PrayTextBlock";
import { useStaticData } from "../hooks/useStaticData";

interface ModlitbyProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Program"> {}

export default function Modlitby({ route, navigation }: ModlitbyProps) {
  const { data: { modlitby }} = useStaticData();

  const { tab } = route.params;
  
  const [index, setIndex] = React.useState(tab);

  const [routes] = React.useState([
    { key: "info", title: "Ranní modlitby" },
    { key: "zpovedi", title: "Magis circle" },
    { key: "prayers", title: "Modlitební pomoc" },
  ]);

  const MorningRoute = () => <PrayTextBlock sections={modlitby.morning}/>
  const MagisRoute = () => <PrayTextBlock sections={modlitby.magis}/>
  const HelpRoute = () => <PrayTextBlock sections={modlitby.help}/>
  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    info: MorningRoute,
    zpovedi: MagisRoute,
    prayers: HelpRoute,
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
        title="Modlitby"
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
