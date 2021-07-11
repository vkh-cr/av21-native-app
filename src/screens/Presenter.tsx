import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { usePresenter } from "../hooks/usePresenter";
import { Avatar, Chip, Headline, Paragraph, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";

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
        // subtitle="nevim"
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Surface style={styles.surface}>
          {presenter?.avatar ? (
            <Avatar.Image
              style={styles.avatar}
              size={256}
              source={{
                uri: `data:image/png;base64, ${presenter.avatar}`,
              }}
            />
          ) : (
            <Avatar.Text
              style={styles.avatar}
              labelStyle={{ letterSpacing: 1 }}
              size={256}
              label={`${presenter?.firstName.substring(
                0,
                1
              )} ${presenter?.lastName.substring(0, 1)}`}
            />
          )}
        </Surface>

        <Headline
          style={styles.headline}
        >{`${presenter?.firstName} ${presenter?.lastName}`}</Headline>
        <Paragraph style={styles.paragraph}>{presenter?.description}</Paragraph>
        {presenter?.courses && presenter.courses.length > 0 && (
          <View style={styles.courses}>
            <Headline>Vede toto: </Headline>
            {presenter?.courses.map((course, index) => (
              <Chip
                key={index}
                icon="pulse"
                mode="outlined"
                style={styles.badge}
              >
                {course.title}
              </Chip>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    paddingTop: 30,
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
  courses: {
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
  surface: {
    padding: 8,
    width: 264,
    height: 264,
    borderRadius: 132,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
