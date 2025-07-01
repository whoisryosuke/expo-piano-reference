import { BaseNote, NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { Chord, ChordType, Scale, ScaleType } from "tonal";
import ScaleReference from "./ScaleReference";
import { FlatList, ListRenderItem } from "react-native";
import { ReferenceItem } from "../types";

type Props = {
  baseNote: BaseNote;
  octave: number;
};

const ScaleTab = ({ baseNote = "C", octave }: Props) => {
  var startTime = performance.now();
  const scales = ScaleType.names().map((scaleType) => {
    const rootNote = `${baseNote}${octave}`;
    return {
      note: rootNote,
      name: `${rootNote} ${scaleType}`,
      notes: Scale.get(`${rootNote} ${scaleType}`).notes,
    };
  }) as ReferenceItem[];
  var endTime = performance.now();
  console.log("Generating scales", `${endTime - startTime} milliseconds.`);

  const renderScales: ListRenderItem<ReferenceItem> = ({ item: scale }) => {
    return <ScaleReference key={scale.name} scale={scale} />;
  };

  return (
    <YStack gap="$4">
      <FlatList data={scales} renderItem={renderScales} />
    </YStack>
  );
};

export default ScaleTab;
