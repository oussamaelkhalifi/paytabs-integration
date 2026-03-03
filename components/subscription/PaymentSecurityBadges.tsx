import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './paymentSecurityBadges.styles';

export function PaymentSecurityBadges() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sécurité renforcée par Paytabs</Text>
      <View style={styles.badgesRow}></View>
      <Text style={styles.disclaimer}>
        Vos données bancaires sont cryptées par Paytabs et ne seront pas
        stockées par NESTPRO.
      </Text>
    </View>
  );
}
