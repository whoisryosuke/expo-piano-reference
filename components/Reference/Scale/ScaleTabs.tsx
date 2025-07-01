import React, { useState } from "react";
import {
  Separator,
  SizableText,
  TabLayout,
  Tabs,
  TabsContentProps,
  View,
  Text,
  XStack,
  Button,
  AnimatePresence,
  Select,
} from "tamagui";
import ChordTab from "@/components/Reference/Chord/ChordTab";
import { TouchableWithoutFeedback } from "react-native";
import { BaseNote, NOTE_LETTERS } from "@/constants/piano";
import ScaleTab from "./ScaleTab";

const TabsContent = ({ baseNote, ...props }: { baseNote: BaseNote }) => {
  return (
    <View
      animation="medium"
      enterStyle={{
        opacity: 0,
        y: 40,
        // scale: 0.9,
      }}
      {...props}
    >
      <ScaleTab baseNote={baseNote} octave={4} />
    </View>
  );
};

type Props = {};

const ScaleTabs = (props: Props) => {
  const [baseNote, setBaseNote] = useState<BaseNote>("C");

  const handleNoteChange = (note: BaseNote) => {
    setBaseNote(note);
  };

  return (
    <View>
      <XStack mb="$4">
        {NOTE_LETTERS.map((noteLetter) => (
          <Button
            key={noteLetter}
            bg={baseNote == noteLetter ? "$blue6" : "$white6"}
            focusStyle={{
              bg: "$blue8",
            }}
            pressStyle={{ bg: "$blue8" }}
            flex={1}
            borderRadius="$1"
            onPress={() => handleNoteChange(noteLetter)}
          >
            <SizableText fontFamily="$body" textAlign="center">
              {noteLetter}
            </SizableText>
          </Button>
        ))}
      </XStack>
      <TabsContent key={baseNote} baseNote={baseNote} />
    </View>
  );
};

export default ScaleTabs;
