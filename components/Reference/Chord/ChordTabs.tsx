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
} from "tamagui";
import ChordTest from "@/components/ChordTest";
import { TouchableWithoutFeedback } from "react-native";

const TabsContent = ({ value, ...props }: TabsContentProps) => {
  return <ChordTest octave={parseInt(value)} />;
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
      <TabsContent value={currentTab} />
    </View>
  );
};

export default ChordTabs;
