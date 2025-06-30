import { MaterialIcons } from "@expo/vector-icons";
import React, { PropsWithChildren } from "react";
import { Stack, Text, useTheme, View, ViewProps, XStack } from "tamagui";

export type SettingsCardProps = ViewProps & {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

const SettingsCard = ({
  label,
  icon,
  children,
  ...props
}: PropsWithChildren<SettingsCardProps>) => {
  const theme = useTheme();

  return (
    <View
      bg="$black2"
      // @ts-ignore
      borderRadius="$6"
      flexDirection="row"
      p="$5"
      justify="space-between"
      {...props}
    >
      <XStack gap="$2" style={{ alignItems: "center" }}>
        <MaterialIcons name={icon} size={16} color={theme.white9.val} />
        <Text fontWeight="bold" color="$white9" fontSize="$5">
          {label}
        </Text>
      </XStack>
      {children}
    </View>
  );
};

export default SettingsCard;
