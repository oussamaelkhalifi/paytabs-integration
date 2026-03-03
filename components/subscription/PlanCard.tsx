import { Colors } from '@/constants/Colors';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { CheckIcon } from './PaymentIcons';
import { styles } from './planCard.styles';

type Props = {
  planName: string;
  price: number;
  features: string[];
  isLoading?: boolean;
};

export function PlanCard({ planName, price, features, isLoading = false }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.planName}>{planName}</Text>
        {isLoading ? (
          <ActivityIndicator size='small' color={Colors.black} />
        ) : (
          <View style={styles.priceBlock}>
            <Text style={styles.price}>{price.toLocaleString('fr-FR')}</Text>
            <View style={styles.priceLabels}>
              <Text style={styles.currency}>MAD</Text>
              <Text style={styles.ht}>(HT)</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.featuresBlock}>
        {features.map((feature) => (
          <View key={feature} style={styles.featureRow}>
            <CheckIcon />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.divider} />
      <Text style={styles.footer}>Paiement sécurisé • Adhésion sans engagement</Text>
    </View>
  );
}
