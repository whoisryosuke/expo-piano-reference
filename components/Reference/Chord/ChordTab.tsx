import { BaseNote, NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { Chord, ChordType } from "tonal";
import ChordReference from "./ChordReference";

type Props = {
  baseNote: BaseNote;
  octave: number;
};

const ChordTest = ({ baseNote = "C", octave }: Props) => {
  const chords = ChordType.names().map((chordType) => {
    const rootNote = `${baseNote}${octave}`;
    return {
      note: rootNote,
      name: `${rootNote}${chordType}`,
      notes: Chord.notes(chordType, rootNote),
    };
  });

  return (
    <YStack gap="$4">
      {chords.map((chord) => (
        <ChordReference key={chord.name} chord={chord} octave={octave} />
      ))}
    </YStack>
  );
};

export default ChordTest;
