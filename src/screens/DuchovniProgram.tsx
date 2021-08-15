import * as React from "react";
import { Dimensions, Animated, Pressable } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Box, Button, Flex } from "native-base";
import { AppHeader } from "../components/AppHeader";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { ProgramBlock } from "../components/ProgramBlock";
import PrayTextBlock from "../components/PrayTextBlock";
import { useStaticData } from "../hooks/useStaticData";
import * as Linking from "expo-linking";

interface ProgramProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Program"> {}

export default function DuchovniProgram({ navigation }: ProgramProps) {
  const {
    data: { duchovni },
  } = useStaticData();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "info", title: "Info" },
    { key: "pout", title: "Pouť" },
    { key: "magis", title: "Magis" },
    { key: "zpovedi", title: "Zpovědi" },
    { key: "prayers", title: "Chvály" },
  ]);

  const linkBody =
    "https://en.mapy.cz/turisticka?vlastni-body&x=17.3863412&y=49.1047735&z=15&ut=K%C5%99%C3%AD%C5%BE%20-%20cesta%20radosti&ut=k%C5%99%C3%AD%C5%BE%20-%20cesta%20spole%C4%8Denstv%C3%AD&ut=k%C5%99%C3%AD%C5%BE%20-%20cesta%20samoty&uc=97X5qxTU-cjI0dpwcn0c60&ud=49%C2%B06%2746.754%22N%2C%2017%C2%B023%272.563%22E&ud=49%C2%B06%2715.225%22N%2C%2017%C2%B024%2725.063%22E&ud=49%C2%B05%2728.413%22N%2C%2017%C2%B023%271.018%22E";
  const linkOkruh =
    "https://en.mapy.cz/turisticka?planovani-trasy&x=17.3856618&y=49.1022479&z=15&rc=97Z1pxTSpqe2Gbm537VjYng3xi.Ghj7fYegeXg8khei3vFhS.EAgfweix3hUgbT&rs=coor&rs=base&rs=coor&rs=coor&rs=base&rs=stre&rs=coor&rs=coor&rs=base&rs=firm&ri=&ri=2282527&ri=&ri=&ri=2302117&ri=135737&ri=&ri=&ri=1908280&ri=12833996&mrp=%7B%22c%22%3A132%7D&xc=%5B%5D";
  const extraBlockPout = () => {
    <Flex>
      <Button
        onPress={() => {
          Linking.openURL(linkBody);
        }}
      >
        Body pouti
      </Button>
      <Button
        onPress={() => {
          Linking.openURL(linkOkruh);
        }}
      >
        Okruh pouti
      </Button>
    </Flex>;
  };

  const InfoRoute = () => <PrayTextBlock sections={duchovni.general} />;
  const ZpovediRoute = () => <PrayTextBlock sections={duchovni.zpoved} />;
  const PrayersRoute = () => <PrayTextBlock sections={duchovni.prayers} />;
  const PoutRoute = () => <PrayTextBlock sections={duchovni.pout} />;
  const MagisRoute = () => <PrayTextBlock sections={duchovni.magis} />;
  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    info: InfoRoute,
    zpovedi: ZpovediRoute,
    prayers: PrayersRoute,
    pout: PoutRoute,
    magis: MagisRoute,
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
        title="Duchovní program"
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
