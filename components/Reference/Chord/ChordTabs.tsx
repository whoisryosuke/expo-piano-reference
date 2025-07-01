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
import { NOTE_LETTERS } from "@/constants/piano";

const TabsContent = ({
  value,
  baseNote,
  ...props
}: {
  value: string;
  baseNote: string;
}) => {
  return (
    <View
      flex={1}
      animation="medium"
      enterStyle={{
        opacity: 0,
        y: 40,
        // scale: 0.9,
      }}
      {...props}
    >
      <ChordTab baseNote={baseNote} octave={parseInt(value)} />
    </View>
  );
};

type Props = {};

const OCTAVE_TABS = new Array(7).fill(0).map((_, index) => index + 1);

const ChordTabs = (props: Props) => {
  const [baseNote, setBaseNote] = useState("C");
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabChange = (octave: string) => {
    setCurrentTab(octave);
  };

  const handleNoteChange = (note: string) => {
    setBaseNote(note);
  };

  return (
    <View flex={1}>
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
      <XStack mb="$4">
        {OCTAVE_TABS.map((octave) => (
          <Button
            key={octave}
            bg={currentTab == `${octave}` ? "$blue6" : "$white6"}
            focusStyle={{
              bg: "$blue8",
            }}
            pressStyle={{ bg: "$blue8" }}
            flex={1}
            borderRadius="$1"
            onPress={() => handleTabChange(`${octave}`)}
          >
            <SizableText fontFamily="$body" textAlign="center">
              {octave}
            </SizableText>
          </Button>
        ))}
      </XStack>
      <TabsContent
        key={`${baseNote}-${currentTab}`}
        value={currentTab}
        baseNote={baseNote}
      />
    </View>
  );
};

export default ChordTabs;
