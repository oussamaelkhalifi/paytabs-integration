import { FeatureRow } from '@/components/subscription/FeatureRow';
import { InfoBox } from '@/components/subscription/InfoBox';
import { SubscriptionHeader } from '@/components/subscription/SubscriptionHeader';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const FEATURES = [
  {
    id: 1,
    Icon: null,
    title: 'Collaborez dans un réseau de confiance',
    description:
      'Evoluez dans une communauté privée de professionnels immobiliers vérifiés et engagés.',
  },
  {
    id: 2,
    Icon: null,
    title: 'Travaillez plus vite, sans friction',
    description:
      'Centralisez vos biens, vos échanges et vos actions dans un seul espace de travail conçu pour le terrain.',
  },
  {
    id: 3,
    Icon: null,
    title: 'Partagez mieux, sans perdre le contrôle',
    description:
      'Vous choisissez les agents avec lesquels vous collaborez et sur quels biens, de manière simple et structurée.',
  },
  {
    id: 4,
    Icon: null,
    title: 'Adhésion réservée aux professionnels',
    description:
      "Accessible uniquement aux agents immobiliers. L'adhésion garantit un environnement de travail sérieux, structuré et fiable.",
  },
];

const HomeScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleActivate = () => {
    router.push('/payment');
  };

  return (
    <>
      <StatusBar style='dark' />
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <SubscriptionHeader title='Activez votre accès' withGoBack={false} />

        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 100 },
          ]}
          showsVerticalScrollIndicator={false}>
          {FEATURES.map(({ id, title, description }) => (
            <FeatureRow key={id} title={title} description={description} />
          ))}

          <InfoBox
            boldLabel='Note :'
            text="Nestpro est l'infrastructure technologique de votre activité réelle immobilière. Nous ne sommes pas une agence immobilière et n'intervenons dans aucune transaction immobilière."
          />
        </ScrollView>

        <View
          style={[styles.ctaContainer, { paddingBottom: insets.bottom + 16 }]}>
          <TouchableOpacity
            style={[styles.ctaButton]}
            onPress={handleActivate}
            activeOpacity={0.85}>
            <Text style={styles.ctaText}>Activer maintenant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF8',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: '#FAFAF8',
  },
  ctaButton: {
    backgroundColor: Colors.black,
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
  },
  ctaDisabled: {
    opacity: 0.4,
  },
  ctaText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Figtree',
  },
});
