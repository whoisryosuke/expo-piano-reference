import AnimatedView from "@/components/ui/AnimatedView";
import React, { useEffect } from "react";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, View } from "tamagui";
import ClockTicks from "./ClockTicks";

type Props = {
  time: string;
};

const Clock = ({ time }: Props) => {
  const hoursRotation = useSharedValue(0);
  const minutesRotation = useSharedValue(0);

  const hour = parseInt(time.split(":")[0]) % 12;
  const isHalfHour = parseInt(time.split(":")[1].slice(0, 2)) == 0 ? 0 : 1;
  const hours = hour * 2 + isHalfHour;

  const hoursAnimation = useAnimatedStyle(() => {
    const interpolatedRotation = interpolate(
      hoursRotation.value,
      // 12 hours on a clock
      // but we have half hours to respect
      [0, 24],
      // Radians (2pi = 1 full rotation)
      [-Math.PI, -Math.PI + Math.PI * 2],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ rotate: `${interpolatedRotation}rad` }],
    };
  });

  const minutesAnimation = useAnimatedStyle(() => {
    const interpolatedRotation = interpolate(
      minutesRotation.value,
      // 12 hours on a clock
      // but we have half hours to respect
      [0, 1],
      // We only need top and bottom of clock here, so 1 rotation suffices
      [-Math.PI, -Math.PI + Math.PI],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ rotate: `${interpolatedRotation}rad` }],
    };
  });

  console.log("hours", hours);

  useEffect(() => {
    hoursRotation.value = withTiming(hours, { duration: 300 });
    minutesRotation.value = withTiming(isHalfHour, { duration: 300 });
  }, [time]);

  return (
    <View>
      <Circle size={96} bg="$black3" position="relative">
        {/* Hours hand */}
        <AnimatedView
          width="40%"
          height={1}
          position="absolute"
          //   bg="red"
          transformOrigin="center"
          //   transform={[{ rotate: `${Math.PI * 2}rad` }]}
          style={hoursAnimation}
        >
          <View
            width={96 / 3}
            borderBottomWidth="$1"
            borderBottomColor="$white1"
            transform={[{ rotate: `${Math.PI / 2}rad` }]}
            position="relative"
            l="$1.5"
            t={96 / 3 / 2}
          />
        </AnimatedView>
        {/* Minutes hand */}
        <AnimatedView
          width="40%"
          height={1}
          position="absolute"
          //   bg="red"
          transformOrigin="center"
          //   transform={[{ rotate: `${Math.PI * 2}rad` }]}
          style={minutesAnimation}
        >
          <View
            width={96 / 5}
            borderBottomWidth="$1"
            borderBottomColor="$blue10"
            transform={[{ rotate: `${Math.PI / 2}rad` }]}
            position="relative"
            l="$2.5"
            t={96 / 5 / 2}
          />
        </AnimatedView>
        {/* Center dot */}
        <Circle size={8} position="absolute" bg="$white1" />

        {/* Ticks */}
        <ClockTicks />
      </Circle>
    </View>
  );
};

export default Clock;
