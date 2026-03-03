import { Colors } from '@/constants/Colors';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './priceBreakdown.styles';

type Props = {
  subtotal: number;
  taxAmount: number;
  total: number;
};

export function PriceBreakdown({ subtotal, taxAmount, total }: Props) {
  const fmt = (n: number) =>
    n.toLocaleString('fr-FR', { minimumFractionDigits: 2 });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prix total :</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Sous-total HT</Text>
        <Text style={styles.value}>{fmt(subtotal)} MAD</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Taxes (20%)</Text>
        <Text style={styles.value}>{fmt(taxAmount)} MAD</Text>
      </View>

      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total TTC</Text>
        <Text style={styles.totalValue}>{fmt(total)} MAD</Text>
      </View>
    </View>
  );
}
