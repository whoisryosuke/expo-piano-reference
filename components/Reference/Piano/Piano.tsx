import { View, Text, FlatList, ListRenderItem } from "react-native";
import React from "react";
import { generateKeysByOctave } from "@/utils/piano";
import PianoKey from "./PianoKey";
import { ScrollView, XStack } from "tamagui";
import { BaseNote, Note } from "@/constants/piano";

type Props = {
  pressed?: Note[];
  octaveRange?: number[];
};

const Piano = ({ pressed = [], octaveRange = [4, 5] }: Props) => {
  const pianoKeySets = generateKeysByOctave(
    false,
    octaveRange[0],
    octaveRange[1]
  ) as Note[][];

  const renderKeys: ListRenderItem<Note[]> = ({ item: pianoKeySet, index }) => {
    return (
      <XStack key={index}>
        {pianoKeySet.map((pianoKey) => {
          const testBlackNote = `${pianoKey.slice(0, -1)}#${pianoKey.slice(
            -1
          )}` as Note;
          const isBlackPressed = pressed.includes(testBlackNote);
          return (
            <PianoKey
              key={pianoKey}
              note={pianoKey}
              pressed={pressed.includes(pianoKey)}
              blackPressed={isBlackPressed}
            />
          );
        })}
      </XStack>
    );
  };

  return <FlatList data={pianoKeySets} horizontal renderItem={renderKeys} />;
};

export default Piano;
