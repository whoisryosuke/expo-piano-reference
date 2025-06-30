import { View, Text } from "react-native";
import React from "react";
import { generateKeysByOctave } from "@/utils/piano";
import PianoKey from "./PianoKey";
import { XStack } from "tamagui";
import { BaseNote, Note } from "@/constants/piano";

type Props = {
  pressed?: Note[];
};

const Piano = ({ pressed = [] }: Props) => {
  const pianoKeySets = generateKeysByOctave(false, 4, 5);

  return (
    <XStack>
      {pianoKeySets.map((pianoKeySet, index) => (
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
      ))}
    </XStack>
  );
};

export default Piano;
