import React from "react";
import { Avatar as TamaAvatar, Circle, Text, View, AvatarProps } from "tamagui";

type Props = AvatarProps & {};

const Avatar = (props: Props) => {
  return (
    <TamaAvatar circular justify="center" size="$3" {...props}>
      <TamaAvatar.Fallback bg="$accent4" />
      <Text color="$white1" fontSize="$1">
        RH
      </Text>
    </TamaAvatar>
  );
};

export default Avatar;
