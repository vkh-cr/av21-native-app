import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, Dimensions, Image } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { usePresenter } from "../hooks/usePresenter";
import { Chip, Headline, Paragraph, Surface, Avatar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { ScrollView, VStack, Center, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

// how to dynamically import image ? via DB ooor?
import petrGlosar from "../../assets/presenters/petr-glogar.png";
import { useActivity } from "../hooks/useActivity";
interface PresenterProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Presenter"> {}

export default function Presenter({ navigation, route }: PresenterProps) {
  const params = route.params as { presenterId: string };
  const presenter = usePresenter(params.presenterId);
  const avatarWidth = Dimensions.get("window").width - 100;

  console.log(presenter?.avatar);
  return (
    <>
      <AppHeader
        navBack
        title={`${presenter?.firstName} ${presenter?.lastName}`}
        navigation={navigation}
        removeShadow
      />
      <ScrollView
        _contentContainerStyle={{
          w: "100%",
        }}
      >
        <LinearGradient
          colors={["#1FAAAA", "#f0f0f0"]}
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
            {/* <Surface style={{ ...styles.surface }}> */}
            {presenter?.avatar ? (
              <Avatar.Image
                size={avatarWidth}
                source={presenter.avatar}
              />
            ) : (
              <Avatar.Text
                style={styles.avatarText}
                size={avatarWidth}
                labelStyle={{
                  letterSpacing: -2,
                  fontFamily: "HammersmithOne",
                }}
                label={`${presenter?.firstName.substring(
                  0,
                  1
                )} ${presenter?.lastName.substring(0, 1)}`}
              />
            )}
            {/* </Surface> */}
          </View>
        </LinearGradient>

        {/* TODO: this bullshit doesn't work at all, :angry: */}

        <View style={styles.scrollView}>
          <Headline
            style={styles.headline}
          >{`${presenter?.firstName} ${presenter?.lastName}`}</Headline>
          <Paragraph style={styles.paragraph}>
            {presenter?.description}
          </Paragraph>
          {presenter?.activities && presenter.activities.length > 0 && (
            <View style={styles.activities}>
              <Headline>Vede toto: </Headline>
              {presenter?.activities.map((activityId, index) => {
                const activity = useActivity(activityId);
                return (
                  <Chip
                    key={index}
                    icon="pulse"
                    mode="outlined"
                    style={styles.badge}
                    onPress={() =>
                      navigation.navigate("Activity", {
                        activityId: activity?.id,
                      })
                    }
                  >
                    {activity?.title}
                  </Chip>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
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
  imageWrapper: {
    height: Dimensions.get("window").width,
    backgroundColor: "#056970",
    position: "relative",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
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
