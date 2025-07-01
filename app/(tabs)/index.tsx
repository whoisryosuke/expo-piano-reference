import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ChordTest from "@/components/Reference/Chord/ChordTab";
import { ScrollView, Text } from "tamagui";
import ChordTabs from "@/components/Reference/Chord/ChordTabs";

export default function HomeScreen() {
  return (
    <ScrollView p="$4" bg="$background">
      <Text fontSize="$10" fontWeight="bold" mb="$4" mt="$8">
        Chords
      </Text>
      <ChordTabs />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
