import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, StyleSheet, ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { Avatar, List, Surface } from "react-native-paper";
import { useStaticData } from "../hooks/useStaticData";
import { Box } from "native-base";

interface PresentersProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Presenters"> {}

export default function Presenters({ navigation }: PresentersProps) {
  const staticData = useStaticData();
  return (
    <View>
      <AppHeader
        title="Přednášející"
        // subtitle="nevim"
        navigation={navigation}
      />
      <ScrollView style={styles.scrollView}>
        {staticData.data.presenters.sort((a, b) => a.firstName.localeCompare(b.firstName)).map((presenter, index) => (
          <List.Item
            key={index}
            onPress={() =>
              navigation.navigate("Presenter", { presenterId: presenter.id })
            }
            left={(props) => (
              <Surface {...props} style={{ ...props.style, ...styles.surface }}>
                {presenter.avatar ? (
                  <Avatar.Image
                    size={42}
                    source={{
                      uri: `data:image/png;base64, ${presenter.avatar}`,
                    }}
                  />
                ) : (
                  <Avatar.Text
                    style={styles.avatarText}
                    size={40}
                    labelStyle={{ letterSpacing: -2, fontFamily: "HammersmithOne", }}
                    label={`${presenter.firstName.substring(
                      0,
                      1
                    )} ${presenter.lastName.substring(0, 1)}`}
                  />
                )}
              </Surface>
            )}
            right={(props) => {
              return <List.Icon {...props} icon="chevron-right" />;
            }}
            title={`${presenter.firstName} ${presenter.lastName}`}
            description={presenter.description}
            titleStyle={styles.titleStyle}
          />
        ))}
        <Box style={{height: 120}}></Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {},
  avatarText: {
    fontFamily: "HammersmithOne",
    backgroundColor: "#EEEEEE"
  },
  scrollView: {
    paddingLeft: 10,
  },
  surface: {
    width: 46,
    height: 46,
    padding: 4,
    borderRadius: 23,
    elevation: 4,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5D3A",
  },
  titleStyle: {
    // fontFamily: "HammersmithOne",
    fontSize: 18,
    fontWeight: "bold"
  },
});
