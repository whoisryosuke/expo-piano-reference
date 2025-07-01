import { BaseNote, NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React from "react";
import { Text, View, XStack, YStack } from "tamagui";
import { Chord, ChordType, Scale, ScaleType } from "tonal";
import ScaleReference from "./ScaleReference";

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
  });
  var endTime = performance.now();
  console.log("Generating scales", `${endTime - startTime} milliseconds.`);

  return (
    <YStack gap="$4">
      {scales.map((scale) => (
        <ScaleReference key={scale.name} baseNote={baseNote} scale={scale} />
      ))}
    </YStack>
  );
};

export default ScaleTab;
