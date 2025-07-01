import { NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { Chord } from "tonal";
import ChordReference from "./Reference/Chord/ChordReference";

type Props = {
  octave: number;
};

const ChordTest = ({ octave }: Props) => {
  const chords = NOTE_LETTERS_WITH_BLACK.map((baseNote) => {
    const rootNote = `${baseNote}${octave}`;
    return {
      note: rootNote,
      name: `${rootNote}maj7`,
      notes: Chord.notes("maj7", rootNote),
    };
  });

  return (
    <YStack gap="$4">
      {chords.map((chord) => (
        <ChordReference key={chord.name} chord={chord} />
      ))}
    </YStack>
  );
};

export default ChordTest;
