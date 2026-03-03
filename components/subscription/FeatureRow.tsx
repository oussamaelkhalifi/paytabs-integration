import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './featureRow.styles';

type Props = {
  title: string;
  description: string;
};

export function FeatureRow({ title, description }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.iconWrapper}></View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
