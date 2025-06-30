import { View, Text } from "tamagui";
import React from "react";
import { BaseNote, Note, NOTE_LETTERS_BLACK } from "@/constants/piano";

type Props = {
  note: Note;
  pressed?: boolean;
  blackPressed?: boolean;
  last?: boolean;
};

const PianoKey = ({
  note,
  last = false,
  pressed = false,
  blackPressed = false,
  ...props
}: Props) => {
  // We also render a black key if needed
  const testBlackNote = `${note.slice(0, -1)}#` as BaseNote;
  const showBlackKey = NOTE_LETTERS_BLACK.includes(testBlackNote);

  return (
    <View position="relative">
      <View
        minH="$6"
        //   borderTopWidth="$1"
        //   borderBottomWidth="$1"
        //   borderLeftWidth="$1"
        //   borderRightWidth={last ? "$1" : "$0"}
        borderColor="$borderColor"
        // @ts-ignore it exists, don't be lyin'
        borderRadius="$2"
        p="$2"
        bg={pressed ? "$blue8" : "$white6"}
        justify="flex-end"
        {...props}
      >
        <Text
          fontSize="$1"
          color={pressed ? "$blue12" : "$white8"}
          fontWeight="bold"
        >
          {note}
        </Text>
      </View>
      {showBlackKey && (
        <View
          bg={blackPressed ? "$blue8" : "$black1"}
          minW="50%"
          minH="$2.5"
          position="absolute"
          borderRadius="$1"
          t={0}
          r="-25%"
          z={420}
          justify="flex-end"
        >
          <Text
            fontSize="$1"
            color={blackPressed ? "$blue12" : "$black9"}
            fontWeight="bold"
          >
            {note}
          </Text>
        </View>
      )}
    </View>
  );
};

export default PianoKey;
