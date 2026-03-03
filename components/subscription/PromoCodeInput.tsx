import { Colors } from '@/constants/Colors';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './promoCodeInput.styles';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onApply: () => void;
  applied: boolean;
};

export function PromoCodeInput({ value, onChangeText, onApply, applied }: Props) {
  const isDisabled = applied || !value.trim();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        Si vous avez un code promotionnel, entrez-le ici
      </Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Code promotionnel'
          placeholderTextColor='#AAA'
          value={value}
          onChangeText={onChangeText}
          autoCapitalize='characters'
          editable={!applied}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onApply}
          disabled={isDisabled}>
          <Text
            style={[styles.buttonText, isDisabled && styles.buttonTextDisabled]}>
            {applied ? 'APPLIQUÉ' : 'APPLIQUER'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
