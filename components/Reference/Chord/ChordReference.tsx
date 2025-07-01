import React from "react";
import Piano from "../Piano/Piano";
import { View, Text, YStack } from "tamagui";

type Props = {
  chord: any;
  octave: number;
};

const ChordReference = ({ chord, octave }: Props) => {
  return (
    <YStack key={chord.name} gap="$2">
      <Text fontSize="$4" fontWeight="bold">
        {chord.name}
      </Text>
      <Piano pressed={chord.notes} octaveRange={[octave, octave + 1]} />
    </YStack>
  );
};

export default ChordReference;
