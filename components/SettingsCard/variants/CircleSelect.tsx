import React from "react";
import SettingsCard from "../SettingsCard";
import { Circle, Text, View } from "tamagui";
import Avatar from "@/components/ui/Avatar";

type Props = {};

export const drawCircle = (
  radius: number,
  resolution: number,
  startX: number,
  startY: number
) => {
  const positions = new Array(resolution).fill(0).map((_, index) => {
    const angle = (index / resolution) * 2 * Math.PI;
    const baseX = startX + Math.cos(angle) * radius;
    const baseY = startY + Math.sin(angle) * radius;

    return [baseX, baseY];
  });
  return positions;
};

const CircleSelect = (props: Props) => {
  const circlePositions = drawCircle(50, 4, 0, 0);
  return (
    <SettingsCard
      label="Opacity"
      icon="10k"
      // overflow="hidden"
    >
      <View position="relative">
        <View position="absolute" t={-100}>
          {circlePositions.map((position) => (
            <Avatar t={position[1]} l={position[0]} />
          ))}
        </View>
        <Text color="$white2">420</Text>
      </View>
    </SettingsCard>
  );
};

export default CircleSelect;
