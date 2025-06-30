import React from "react";
import { useColorScheme } from "react-native";
import { Text, View } from "tamagui";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type Props = {
  day: number;
  currentDay: number;
  selectedItem: number;
  setSelectedItem: any;
};

const CalendarListItem = ({
  day,
  currentDay,
  selectedItem,
  setSelectedItem,
}: Props) => {
  const colorScheme = useColorScheme();
  const baseBgColor = colorScheme == "dark" ? "white" : "black";
  const baseAltColor = colorScheme == "dark" ? "black" : "white";
  const textColor =
    currentDay == day || selectedItem == day
      ? `$${baseBgColor}1`
      : `$${baseBgColor}11`;
  const DEFAULT_BG = `$${baseAltColor}7`;
  const SELECTED_BG = `$${baseAltColor}10`;
  const baseBg = currentDay == day ? SELECTED_BG : DEFAULT_BG;
  const selectedStyles =
    selectedItem == day
      ? {
          bg: SELECTED_BG,
          borderWidth: "$0.5",
          borderColor: `$${baseBgColor}6`,
        }
      : {
          bg: baseBg,
        };

  const handlePress = () => {
    setSelectedItem(day);
  };

  return (
    <View
      borderRadius="$3"
      py="$1.5"
      px="$2.5"
      minW="$4"
      mr="$2"
      {...selectedStyles}
      style={{ alignItems: "center" }}
      onPress={handlePress}
    >
      <Text fontSize="$8" fontWeight="bold" color={textColor} mb="$3">
        {day}
      </Text>
      <Text fontSize="$2" color={textColor}>
        {DAYS[day % DAYS.length].slice(0, 3).toLocaleUpperCase()}
      </Text>
    </View>
  );
};

export default CalendarListItem;
