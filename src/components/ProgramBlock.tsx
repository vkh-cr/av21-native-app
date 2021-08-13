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
import { ActivityData } from "../types";
import { DrawerScreenProps } from "@react-navigation/drawer";

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
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Activity", { activityId: item.id })
            }
          >
            <Flex style={styles.row} m={2} border={"black"}>
              <Flex flexDirection="column" bg="primary.300" flexGrow={1}>
                <Box>
                  <Heading size="md">{item.title}</Heading>
                </Box>
                <Box bg="primary.500">
                  <Text>
                    {item.presenter.firstName} {item.presenter.lastName}
                  </Text>
                </Box>
                <Box>
                  <Text>{item.location}</Text>
                </Box>
              </Flex>
              <Box marginLeft={"auto"} style={{ paddingTop: 5 }}>
                <ChevronRightIcon />
              </Box>
            </Flex>
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({ section: { title, time, location, icon } }) => (
        <Box px={3} py={2} rounded="md" mt={2} bg="primary.200">
          <Flex flexDir="row" justifyContent="flex-start">
            {icon && <AntDesign name={icon} size={24} color="black" />}
            <Text bg="primary.300">{title}</Text>
          </Flex>
          <Box>{time}</Box>
          <Box>{location}</Box>
        </Box>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "HammersmithOne",
    fontSize: 165,
  },
  row: {
    flexDirection: "row",
    // alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  headers: {
    display: "flex",
  },
});
