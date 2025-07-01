import React, { memo, useEffect, useState } from "react";
import Piano from "../Piano/Piano";
import { View, Text, YStack } from "tamagui";
import { Note } from "@/constants/piano";
import { Chord } from "tonal";

type Props = {
  chord: any;
  octave: number;
};

const ChordReference = memo(({ chord, octave }: Props) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const newNotes = Chord.notes(chord.type, chord.note) as Note[];
    setNotes(newNotes);
  }, [chord.type, chord.note]);

  return (
    <YStack key={chord.name} gap="$2">
      <Text fontSize="$4" fontWeight="bold">
        {chord.name}
      </Text>
      <Piano pressed={notes} octaveRange={[octave, octave + 1]} />
    </YStack>
  );
});

export default ChordReference;
