import React from "react";
import SettingsCard, { SettingsCardProps } from "../SettingsCard";
import { Adapt, Select, Sheet } from "tamagui";

type Props = SettingsCardProps & {
  items: string[];
};

const SelectCard = ({ label, icon, items }: Props) => {
  const [val, setVal] = React.useState(items[0]);

  return (
    <Select value={val} onValueChange={setVal}>
      <Select.Trigger p="0" bg="transparent">
        <SettingsCard label={label} icon={icon} width="100%">
          <Select.Value placeholder="Something" />
        </SettingsCard>
      </Select.Trigger>
      <Adapt when="maxMd" platform="touch">
        <Sheet native modal dismissOnSnapToBottom animation="medium">
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            backgroundColor="$shadowColor"
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton />
        <Select.Viewport
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label>Tracks</Select.Label>
            {items.map((item, i) => (
              <Select.Item index={i} key={item} value={item.toLowerCase()}>
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  );
};

export default SelectCard;
