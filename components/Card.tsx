import React from "react";
import { Button, Image, Stack, Text, View } from "tamagui";

const image = require("../assets/images/icon.png");

type Props = {};

const Card = (props: Props) => {
  return (
    <Stack width="100%" gap="$1.5">
      <View
        width="100%"
        minH={200}
        position="relative"
        flexDirection="column-reverse"
        p="$3"
      >
        <Image
          source={{
            uri: image,
            width: 200,
            height: 200,
          }}
          position="absolute"
          inset={0}
          width="auto"
          height="auto"
          objectFit="cover"
          borderRadius="$5"
        />
        <Text fontSize="$3">Short description</Text>
        <Text fontSize="$5">Product Name</Text>
      </View>
      <Button>Buy now</Button>
      <Button theme="accent">View Details</Button>
    </Stack>
  );
};

export default Card;
