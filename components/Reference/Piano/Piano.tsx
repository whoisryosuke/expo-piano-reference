import { View, Text } from "react-native";
import React from "react";
import { generateKeysByOctave } from "@/utils/piano";
import PianoKey from "./PianoKey";
import { XStack } from "tamagui";
import { Note } from "@/constants/piano";

type Props = {
  pressed?: Note[];
};

const Piano = ({ pressed = [] }: Props) => {
  const pianoKeySets = generateKeysByOctave(false, 4, 5);

  return (
    <XStack>
      {pianoKeySets.map((pianoKeySet, index) => (
        <XStack key={index}>
          {pianoKeySet.map((pianoKey) => (
            <PianoKey
              key={pianoKey}
              note={pianoKey}
              pressed={pressed.includes(pianoKey)}
            />
          ))}
        </XStack>
      ))}
    </XStack>
  );
};

export default Piano;
