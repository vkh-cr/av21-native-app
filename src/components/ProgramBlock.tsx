import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import {
  Box,
  SectionList,
  Center,
  NativeBaseProvider,
  Text,
  Heading,
  ChevronRightIcon,
  Flex,
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useStaticData } from "../hooks/useStaticData";
import { ActivityData, ActivityTypes } from "../types";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { borderLeft } from "styled-system";

interface ProgramBlockProps
  extends DrawerScreenProps<Record<string, object | undefined>, "Presenter"> {
  day: number;
}

export const ProgramBlock = ({ day, navigation }: ProgramBlockProps) => {
  const data = useStaticData();
  const harmonogram = data.data.harmonogram[day];

  return (
    <SectionList
      sections={harmonogram}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => {
        let activityColor;
        switch (item.type) {
          case ActivityTypes.VOLNOCAS:
              activityColor = "#FF5D3A"
            break;
          case ActivityTypes.PREDNASKA:
              activityColor = "#1FAAAA"
              break;
          case ActivityTypes.DUCHOVNI:
              activityColor = "#FFC700"
              break;
          default:
            activityColor = "#CECECE"
            break;
        }
        return (
          <TouchableOpacity
            key={index}
            style={styles.activityWrapper}
            onPress={() =>
              navigation.navigate("Activity", { activityId: item.id })
            }
          >
            <Flex style={{...styles.activity, borderLeftColor: activityColor}} bg="#EEEEEE" m={2}>
              <Flex flexDirection="column" flexGrow={1}>
                <Box>
                  <Text style={styles.activityHeader}>{item.title}</Text>
                </Box>
                <Box>
                  {item.presenter.display && (
                    <Text>
                      {item.presenter.firstName} {item.presenter.lastName}
                    </Text>
                  )}
                </Box>
                <Box>
                  <Text>{item.location}</Text>
                </Box>
                {item.capacity && (
                  <Box>
                    <Text>Kapacita: {item.capacity}</Text>
                  </Box>
                )}
              </Flex>
              <Box marginLeft={"auto"} style={{ paddingTop: 5 }}>
                <ChevronRightIcon />
              </Box>
            </Flex>
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({
        section: { title, time, location, icon },
        index,
      }) => (
        <Box key={index} px={3} py={2} mt={2} style={styles.section}>
          <Flex
            flexDir="row"
            justifyContent="flex-start"
            alignItems={"baseline"}
          >
            <Text style={styles.sectionHeader}>{title}</Text>
          </Flex>
          <Text style={styles.sectionTime} bold>
            {time}
          </Text>
          <Text>{location}</Text>
        </Box>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontFamily: "HammersmithOne",
    fontSize: 20,
    alignSelf: "baseline",
  },
  sectionTime: {
    color: "#6b6b6b",
  },
  section: {
    borderLeftColor: "#6b6b6b",
    borderLeftWidth: 6,
    backgroundColor: "#E9E9E9",
  },

  activity: {
    flexDirection: "row",
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 0,
    borderLeftWidth: 3,
  },
  activityWrapper: {
    marginHorizontal: 10,
  },
  activityHeader: {
    fontFamily: "HammersmithOne",
    fontSize: 18,
    alignSelf: "baseline",
  },
  headers: {
    display: "flex",
  },
});
