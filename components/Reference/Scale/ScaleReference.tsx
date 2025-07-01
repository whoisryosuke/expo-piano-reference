import React, { useEffect, useState } from "react";
import Piano from "../Piano/Piano";
import { View, Text, YStack } from "tamagui";
import { BaseNote, Note } from "@/constants/piano";
import { Scale } from "tonal";
import { ReferenceItem } from "../types";

type Props = {
  scale: ReferenceItem;
};

const ScaleReference = ({ scale }: Props) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const newNotes = Scale.get(`${scale.note} ${scale.type}`).notes as Note[];
    setNotes(newNotes);
  }, [scale.type, scale.note]);

  return (
    <YStack key={scale.note} gap="$2">
      <Text fontSize="$4" fontWeight="bold">
        {scale.name}
      </Text>
      <Piano pressed={notes} octaveRange={[4, 5]} />
    </YStack>
  );
};

export default ScaleReference;
