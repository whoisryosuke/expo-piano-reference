import AnimatedView from "@/components/ui/AnimatedView";
import Badge from "@/components/ui/Badge";
import { MaterialIcons } from "@expo/vector-icons";
import React, { PropsWithChildren, useState } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Stack,
  Text,
  useTheme,
  View,
  ViewProps,
  XStack,
  YStack,
} from "tamagui";
import ClockSelector from "./ClockSelector";

export type SettingsCardProps = ViewProps & {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const ExpandCard = ({
  label,
  icon,
  children,
  ...props
}: PropsWithChildren<SettingsCardProps>) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const height = useSharedValue(50);

  const animatedHeight = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        height.value,
        [50, 200],
        [0, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  const handleHeightChange = () => {
    const newHeight = isExpanded ? 0 : 200;
    height.value = withTiming(newHeight, { duration: 300 });
    setIsExpanded(!isExpanded);
  };

  return (
    <View
      bg="$black2"
      // @ts-ignore
      borderRadius="$6"
      p="$5"
      onPress={isExpanded ? null : handleHeightChange}
    >
      <View flexDirection="row" justify="space-between" {...props}>
        <XStack gap="$2" style={{ alignItems: "center" }}>
          <MaterialIcons name={icon} size={16} color={theme.white9.val} />
          <Text fontWeight="bold" color="$white9" fontSize="$5">
            {label}
          </Text>
        </XStack>
        <Text fontWeight="bold" color="$white2" fontSize="$5">
          Text
        </Text>
      </View>
      <AnimatedView
        // animateOnly={["height"]}
        style={[animatedHeight]}
      >
        <View pt="$4" flex={1}>
          <AnimatedView
            flex={1}
            bg="$black1"
            borderRadius="$4"
            p="$3"
            style={[animatedOpacity]}
          >
            <YStack flex={1}>
              <XStack
                gap="$2"
                borderBottomWidth="$1"
                borderBottomColor="$black2"
                pb="$3"
              >
                <Badge
                  icon="check-circle"
                  text="Single time"
                  iconColor={theme.blue9.val}
                />
                <Badge text="Time Range" />
              </XStack>
              <ClockSelector />
            </YStack>
          </AnimatedView>
        </View>
      </AnimatedView>
    </View>
  );
};

export default ExpandCard;
