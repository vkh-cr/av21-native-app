import * as React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Text, View, StyleSheet, ScrollView } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { Avatar, List } from "react-native-paper";
import { useStaticData } from "../hooks/useStaticData";
import { useCallback } from "react";

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
            left={(props) =>
              presenter.avatar ? (
                <Avatar.Image
                  {...props}
                  style={{ ...props.style, ...styles.avatar }}
                  size={42}
                  source={{
                    uri: `data:image/png;base64, ${presenter.avatar}`,
                  }}
                />
              ) : (
                <Avatar.Text
                  {...props}
                  style={{ ...props.style, ...styles.avatar }}
                  size={42}
                  label={`${presenter.firstName.substring(
                    0,
                    1
                  )} ${presenter.lastName.substring(0, 1)}`}
                />
              )
            }
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
  avatar: {
    alignSelf: "center",
  },
  scrollView: {
    height: "100%",
  },
});
