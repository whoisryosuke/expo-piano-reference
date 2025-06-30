import { FlatList, SafeAreaView, useColorScheme } from "react-native";
import React, { useState } from "react";
import { Button, Text, View } from "tamagui";
import CalendarListItem from "./CalendarListItem";

const CALENDAR_LIST = new Array(31).fill(0).map((_, index) => index + 1);

type Props = {};

const CalendarPrototype = (props: Props) => {
  const [currentDay, setCurrentDay] = useState(20);
  const [selectedItem, setSelectedItem] = useState(0);
  const colorScheme = useColorScheme();
  const baseBgColor = colorScheme == "dark" ? "white" : "black";
  const baseAltColor = colorScheme == "dark" ? "black" : "white";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View id="container" flex={1} bg={`$${baseAltColor}1`} justify="flex-end">
        <View position="absolute" t="$4" r="$2">
          <Button bg="$accent4" color="white">
            {colorScheme == "dark" ? "Dark" : "Light"}mode
          </Button>
        </View>
        <View bg={`$${baseAltColor}5`} borderRadius="$8" p="$4" pb="$6">
          <View style={{ alignItems: "center" }}>
            <View
              borderRadius="$1"
              bg={`$${baseBgColor}10`}
              width="$4"
              height="$0.5"
            />
          </View>
          <View
            justify="space-between"
            flexDirection="row"
            mb="$3"
            style={{ alignItems: "center" }}
          >
            <Text color={`$${baseBgColor}1`} fontSize="$9" fontWeight="bold">
              Sat
            </Text>
            <Text color={`$${baseBgColor}1`} fontSize="$6" fontWeight="bold">
              April 20
            </Text>
          </View>
          <FlatList
            data={CALENDAR_LIST}
            renderItem={({ item }) => (
              <CalendarListItem
                day={item}
                currentDay={currentDay}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarPrototype;
