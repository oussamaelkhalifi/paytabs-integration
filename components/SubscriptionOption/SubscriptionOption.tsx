import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './subscriptionScreen.styles';

type Props = {
  id: string;
  title: string;
  price: string;
  selected: boolean;
  onPress: () => void;
  badge?: string;
  discount?: string;
  disabled?: boolean;
};

const SubscriptionOption: React.FC<Props> = ({
  title,
  price,
  selected,
  onPress,
  badge,
  discount,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.option,
        selected && styles.optionSelected,
        disabled && styles.optionDisabled,
      ]}
      onPress={onPress}>
      <View style={styles.optionTopRow}>
        <Text style={styles.optionTitle}>{title}</Text>
        {selected && (
          <Ionicons name='radio-button-on' size={22} color='black' />
        )}
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.optionPrice}>{price}</Text>
        {discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{discount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SubscriptionOption;
