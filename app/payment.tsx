import { PaymentSecurityBadges } from '@/components/subscription/PaymentSecurityBadges';
import { PlanCard } from '@/components/subscription/PlanCard';
import { SubscriptionHeader } from '@/components/subscription/SubscriptionHeader';
import { Colors } from '@/constants/Colors';
import { CONFIG } from '@/constants/config';
import { usePayment } from '@/hooks/payment';
import { PaymentConfig } from '@/types/payment';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PLAN_NAME = 'Découverte';

const PLAN_FEATURES = [
  'Accès à 10 cartes partagées',
  'Accès à une carte privée',
  'Annonces illimitées',
  'Utilisateurs illimités',
  "3 mois d'accès",
  'Support client disponible',
];

const PaymentScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const {
    isLoading: isPaymentLoading,
    startCardPayment,
    resetPayment,
  } = usePayment();

  const handlePayNow = useCallback(async () => {
    const billingDetails = {
      name: 'test user',
      email: 'testuser@test.com',
      phone: '+212600000000',
      addressLine: 'Maroc',
      city: 'Casablanca',
      state: 'Casablanca',
      countryCode: 'MA',
      zip: '20000',
    };

    const paymentConfig: PaymentConfig = {
      profileID: CONFIG.PAY_TABS_CONFIG.PROFILE_ID,
      serverKey: CONFIG.PAY_TABS_CONFIG.SERVER_KEY,
      clientKey: CONFIG.PAY_TABS_CONFIG.CLIENT_KEY,
      cartID: `company-name-sub-${Date.now()}`,
      cartDescription: `Abonnement ${PLAN_NAME} – company`,
      merchantName: 'Company name',
      merchantCountryCode: 'MA',
      currency: 'MAD',
      amount: 1700.0,
      screenTitle: 'Paiement',
      billingDetails,
      showBillingInfo: true,
      showShippingInfo: false,
    };

    try {
      const result = await startCardPayment(paymentConfig);
      const responseStatus =
        result?.PaymentDetails?.paymentResult?.responseStatus;

      if (!responseStatus || responseStatus !== 'A') {
        Alert.alert(
          'Echec du paiement',
          'Votre paiement a échoué, veuillez faire une nouvelle tentative',
          [{ text: 'Réessayer', onPress: resetPayment }],
        );
        return;
      }

      console.log('result :>> ', result);
      const paymentDetails = result.PaymentDetails;
      if (!paymentDetails) {
        Alert.alert(
          'Echec du paiement',
          "Nous n'avons pas pu récupérer les détails de votre paiement. Veuillez contacter le support.",
          [
            {
              text: 'Contacter le support',
              onPress: () => {},
            },
          ],
        );
        return;
      }

      Alert.alert(
        'Paiement réussi',
        'Votre paiement a été effectué avec succès. Merci pour votre confiance !',
        [
          {
            text: 'OK',
            onPress: () => {
              router.push('/home');
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert(
        'Echec du paiement',
        'Votre paiement a échoué, veuillez faire une nouvelle tentative',
        [{ text: 'Réessayer', onPress: resetPayment }],
      );
    }
  }, []);

  const isLoading = isPaymentLoading;

  return (
    <>
      <StatusBar style='dark' />
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <SubscriptionHeader title='Paiement' onBack={() => router.back()} />

        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 110 },
          ]}
          showsVerticalScrollIndicator={false}>
          <PlanCard
            planName={PLAN_NAME}
            price={CONFIG.PAY_TABS_CONFIG.SUBSCRIPTION_PRICE}
            features={PLAN_FEATURES}
            isLoading={isLoading}
          />

          <View
            style={[
              styles.ctaContainer,
              { paddingBottom: insets.bottom + 16 },
            ]}>
            <TouchableOpacity
              style={[styles.ctaButton, isLoading && styles.ctaDisabled]}
              onPress={handlePayNow}
              disabled={isLoading}
              activeOpacity={0.85}>
              {isLoading ? (
                <ActivityIndicator color={Colors.white} />
              ) : (
                <Text style={styles.ctaText}>Payer maintenant</Text>
              )}
            </TouchableOpacity>

            <PaymentSecurityBadges />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF8',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  ctaContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: '#FAFAF8',
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: Colors.black,
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  ctaDisabled: {
    opacity: 0.5,
  },
  ctaText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Figtree',
  },
});
