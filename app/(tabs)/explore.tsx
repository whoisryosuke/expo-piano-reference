import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { View, Text } from "tamagui";
import ScaleTabs from "@/components/Reference/Scale/ScaleTabs";

export default function TabTwoScreen() {
  return (
    <View p="$4" bg="$background">
      <Text fontSize="$10" fontWeight="bold" mb="$4" mt="$8">
        Scales
      </Text>
      <ScaleTabs />
    </View>
  );
}
