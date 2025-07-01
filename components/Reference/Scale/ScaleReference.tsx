import React from "react";
import Piano from "../Piano/Piano";
import { View, Text, YStack } from "tamagui";
import { BaseNote, Note } from "@/constants/piano";
import { Scale } from "tonal";

type Props = {
  scale: {
    name: string;
    note: BaseNote;
    notes: Note[];
  };
};

const ScaleReference = ({ scale }: Props) => {
  return (
    <YStack key={scale.note} gap="$2">
      <Text fontSize="$4" fontWeight="bold">
        {scale.name}
      </Text>
      <Piano pressed={scale.notes} octaveRange={[4, 5]} />
    </YStack>
  );
};

export default ScaleReference;
