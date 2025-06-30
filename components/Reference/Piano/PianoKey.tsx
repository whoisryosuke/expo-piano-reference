import { View, Text } from "tamagui";
import React from "react";
import { Note } from "@/constants/piano";

type Props = {
  note: Note;
  pressed?: boolean;
  last?: boolean;
};

const PianoKey = ({ note, last = false, pressed = false, ...props }: Props) => {
  return (
    <View
      minH="$6"
      //   borderTopWidth="$1"
      //   borderBottomWidth="$1"
      //   borderLeftWidth="$1"
      //   borderRightWidth={last ? "$1" : "$0"}
      borderColor="$borderColor"
      borderRadius="$3"
      p="$2"
      bg={pressed ? "$blue8" : "$white7"}
      justify="flex-end"
      {...props}
    >
      <Text fontSize="$1" color={pressed ? "$blue12" : "$black10"}>
        {note}
      </Text>
    </View>
  );
};

export default PianoKey;
