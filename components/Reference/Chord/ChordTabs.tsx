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
} from "tamagui";
import ChordTest from "@/components/ChordTest";
import { TouchableWithoutFeedback } from "react-native";

const TabsContent = ({ value, ...props }: TabsContentProps) => {
  return (
    <View
      animation="medium"
      enterStyle={{
        opacity: 0,
        y: 40,
        scale: 0.9,
      }}
      {...props}
    >
      <ChordTest octave={parseInt(value)} />
    </View>
  );
};

type Props = {};

const OCTAVE_TABS = new Array(7).fill(0).map((_, index) => index + 1);

const ChordTabs = (props: Props) => {
  const [currentTab, setCurrentTab] = useState("1");

  console.log(
    "currentTab",
    currentTab,
    `${OCTAVE_TABS[0]}`,
    currentTab == `${OCTAVE_TABS[0]}`
  );

  const handleTabChange = (octave: string) => {
    setCurrentTab(octave);
  };

  return (
    <View>
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
      <AnimatePresence initial={false}>
        <TabsContent key={currentTab} value={currentTab} />
      </AnimatePresence>
    </View>
  );
};

export default ChordTabs;
