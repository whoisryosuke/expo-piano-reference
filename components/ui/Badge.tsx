import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { XStack, Text } from "tamagui";

type Props = {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text: string;
  iconColor?: string;
};

const Badge = ({ text, icon, iconColor = "blue" }: Props) => {
  return (
    <XStack
      verticalAlign="middle"
      gap="$2"
      borderWidth="$1"
      //@ts-ignore
      borderRadius="$8"
      borderColor="$white12"
      py="$2"
      px="$3"
      style={{ alignItems: "center" }}
    >
      {icon && <MaterialIcons name={icon} color={iconColor} size={16} />}
      <Text color="$white1">{text}</Text>
    </XStack>
  );
};

export default Badge;
