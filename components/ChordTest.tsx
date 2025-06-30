import { NOTE_LETTERS_WITH_BLACK } from "@/constants/piano";
import React from "react";
import { Text, View } from "react-native";
import { XStack } from "tamagui";
import { Chord } from "tonal";

type Props = {};

const ChordTest = (props: Props) => {
  const octave = 4;
  const chords = NOTE_LETTERS_WITH_BLACK.map((baseNote) => {
    const rootNote = `${baseNote}${octave}`;
    return {
      note: rootNote,
      name: `${rootNote}maj7`,
      notes: Chord.notes("maj7", rootNote),
    };
  });

  return (
    <View>
      <Text>ChordTest</Text>
      {chords.map((chord) => (
        <View key={chord.name}>
          <Text>{chord.name}</Text>
          <XStack>
            {chord.notes.map((note) => (
              <Text key={note}>{note}</Text>
            ))}
          </XStack>
        </View>
      ))}
    </View>
  );
};

export default ChordTest;
