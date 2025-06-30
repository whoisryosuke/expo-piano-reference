import AnimatedView from "@/components/ui/AnimatedView";
import React, { useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, Text, View, XStack } from "tamagui";
import Clock from "./Clock";

// 24 hours in a day * 2 to include the half hour
const TIME_SELECTION_OPTIONS = new Array(24 * 2).fill(0).map((_, index) => {
  const trueIndex = index / 2;
  const hours = Math.floor(trueIndex) % 12;
  // Check if it's a whole number or not -- whole number = full hour
  const minutes = trueIndex == Math.floor(trueIndex) ? `00` : `30`;
  const suffix = trueIndex >= 12 ? "pm" : "am";

  return `${hours}:${minutes} ${suffix}`;
});

type Props = {};

const ClockSelector = (props: Props) => {
  const animatedOpacity = useSharedValue(0);
  const [selectedTime, setSelectedTime] = useState<string>(
    TIME_SELECTION_OPTIONS[0]
  );

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  });

  const renderListItem = ({ item }: { item: string }) => {
    const handlePress = () => {
      animatedOpacity.value = withTiming(0, { duration: 300 });
      setSelectedTime(item);
      animatedOpacity.value = withTiming(1, { duration: 300 });
    };
    return (
      <View
        flex={1}
        justify="center"
        style={{ alignItems: "center" }}
        onPress={handlePress}
        position="relative"
      >
        <View
          bg="$blue10"
          borderRadius="$2"
          position="absolute"
          width={"80%"}
          height={"100%"}
          t="$0"
          l="10%"
          animation="200ms"
          opacity={selectedTime == item ? 1 : 0}
          //   style={selectedTime == item ? animatedOpacityStyle : { opacity: 0 }}
        />
        <Text color="$white1" fontSize="$8">
          {item}
        </Text>
      </View>
    );
  };

  return (
    <XStack py="$3">
      <Clock time={selectedTime} />
      <FlatList
        data={TIME_SELECTION_OPTIONS}
        renderItem={renderListItem}
        style={{ flex: 1, maxHeight: 100 }}
      />
    </XStack>
  );
};

export default ClockSelector;
