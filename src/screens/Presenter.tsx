import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, Dimensions, Image } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { usePresenter } from "../hooks/usePresenter";
import { Chip, Headline, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";
import { ScrollView, VStack, Center, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

// how to dynamically import image ? via DB ooor?
import petrGlosar from "../../assets/presenters/petr-glogar.png";
interface PresenterProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Presenter"> {}

export default function Presenter({ navigation, route }: PresenterProps) {
  const params = route.params as { presenterId: string };
  const presenter = usePresenter(params.presenterId);

  return (
    <View>
      <AppHeader
        navBack
        title={`${presenter?.firstName} ${presenter?.lastName}`}
        navigation={navigation}
        removeShadow
      />

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
          <Headline style={{ color: "white", fontFamily: "HammersmithOne" }}>
            {presenter?.firstName}{" "}
          </Headline>
          <Headline style={{ color: "white", fontFamily: "HammersmithOne" }}>
            {presenter?.lastName}
          </Headline>
        </View>
      </LinearGradient>

      {/* TODO: this bullshit doesn't work at all, :angry: */}
      <ScrollView
        px={100}
        _contentContainerStyle={{
          w: "100%",
        }}
      >
        <View style={{ flex: 1 }}>
          <Headline
            style={styles.headline}
          >{`${presenter?.firstName} ${presenter?.lastName}`}</Headline>
          <Paragraph style={styles.paragraph}>
            {presenter?.description}
          </Paragraph>
          {presenter?.activities && presenter.activities.length > 0 && (
            <View style={styles.activities}>
              <Headline>Vede toto: </Headline>
              {presenter?.activities.map((activity, index) => (
                <Chip
                  key={index}
                  icon="pulse"
                  mode="outlined"
                  style={styles.badge}
                >
                  {activity.title}
                </Chip>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  headline: {
    marginTop: 20,
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

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
