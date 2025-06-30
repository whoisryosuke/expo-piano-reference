import mapRange from "@/utils/mapRange";
import React from "react";
import { View } from "tamagui";

type Props = {};

const ClockTicks = (props: Props) => {
  return (
    <View position="absolute" width="80%" height="80%" justify="center">
      {new Array(5).fill(0).map((_, index) => {
        const width = 96 / 10;
        const rotation = mapRange(index, 0, 5, 0, Math.PI);
        return (
          <View
            key={index}
            width="100%"
            height={1}
            position="absolute"
            transform={[{ rotate: `${rotation}rad` }]}
            // bg="red"
            transformOrigin="center"
          >
            <View
              width={width}
              borderBottomWidth="$1"
              borderBottomColor="$black7"
              //   transform={[{ rotate: `${Math.PI / 2}rad` }]}
              position="relative"
              //   l="$2.5"
              //   t="$4"
            />
            <View
              width={width}
              borderBottomWidth="$1"
              borderBottomColor="$black7"
              //   transform={[{ rotate: `${Math.PI / 2}rad` }]}
              position="relative"
              top="$-1"
              // The width of total circle is 96
              // but the container is 80% of that
              // so we shift it by that size, minus the width
              l={96 * 0.8 - width}
              //   t="$4"
            />
          </View>
        );
      })}
    </View>
  );
};

export default ClockTicks;
