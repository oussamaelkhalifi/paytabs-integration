import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './nextStepRow.styles';

type Props = {
  Icon: React.FC;
  label: string;
};

export function NextStepRow({ Icon, label }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.iconWrapper}>
        <Icon />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
