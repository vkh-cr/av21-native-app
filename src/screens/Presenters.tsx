import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { View, StyleSheet, ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { Avatar, List, Surface } from "react-native-paper";
import { useStaticData } from "../hooks/useStaticData";

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
        {staticData.data.presenters.map((presenter, index) => (
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
                    size={42}
                    labelStyle={{ letterSpacing: 0.5 }}
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
