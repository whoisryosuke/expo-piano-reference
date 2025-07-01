import { BaseNote, NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React, { useEffect, useMemo, useState } from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { Chord, ChordType } from "tonal";
import ChordReference from "./ChordReference";
import { ReferenceItem } from "../types";
import { ALL_CHORD_NAMES } from "@/utils/music";
import { FlatList, ListRenderItem } from "react-native";

type Props = {
  baseNote: BaseNote;
  octave: number;
};

const ChordTest = ({ baseNote = "C", octave }: Props) => {
  const chordNames = useMemo(() => {
    console.log("generating chord names....");
    return ChordType.names();
  }, []);
  // const chordNames = ALL_CHORD_NAMES;
  const [chords, setChords] = useState<ReferenceItem[]>([]);

  useEffect(() => {
    const newChords = chordNames.map((chordType) => {
      const rootNote = `${baseNote}${octave}`;
      return {
        note: rootNote,
        name: `${rootNote}${chordType}`,
        type: chordType,
        // notes: Chord.notes(chordType, rootNote),
      };
    }) as ReferenceItem[];
    setChords(newChords);
  }, [baseNote, octave]);

  // const chords = useMemo(() => {
  //   const newChords = ChordType.names().map((chordType) => {
  //     const rootNote = `${baseNote}${octave}`;
  //     return {
  //       note: rootNote,
  //       name: `${rootNote}${chordType}`,
  //       type: chordType,
  //       // notes: Chord.notes(chordType, rootNote),
  //     };
  //   }) as ReferenceItem[];
  //   return newChords;
  // }, [baseNote, octave]);

  const renderScales: ListRenderItem<ReferenceItem> = ({ item: chord }) => {
    return <ChordReference key={chord.name} chord={chord} octave={octave} />;
  };

  return (
    <YStack gap="$4" flex={1}>
      {chords.length == 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList data={chords} renderItem={renderScales} />
      )}
    </YStack>
  );
};

export default ChordTest;
