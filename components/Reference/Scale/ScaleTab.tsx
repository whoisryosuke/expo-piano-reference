import { BaseNote, NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React, { useEffect, useMemo, useState } from "react";
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
  const scaleNames = useMemo(() => {
    console.log("generating scale names....");
    return ScaleType.names();
  }, []);
  const [scales, setScales] = useState<ReferenceItem[]>([]);

  useEffect(() => {
    var startTime = performance.now();
    const newScales = scaleNames.map((scaleType) => {
      const rootNote = `${baseNote}${octave}`;
      return {
        note: rootNote,
        name: `${rootNote} ${scaleType}`,
        type: scaleType,
        // notes: Scale.get(`${rootNote} ${scaleType}`).notes,
      };
    }) as ReferenceItem[];
    var endTime = performance.now();

    setScales(newScales);
    console.log("Generating scales", `${endTime - startTime} milliseconds.`);
  }, [baseNote, octave]);

  const renderScales: ListRenderItem<ReferenceItem> = ({ item: scale }) => {
    return <ScaleReference key={scale.name} scale={scale} />;
  };

  return (
    <YStack gap="$4">
      {scales.length == 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList data={scales} renderItem={renderScales} />
      )}
    </YStack>
  );
};

export default ScaleTab;
