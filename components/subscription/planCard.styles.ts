import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1.5,
    borderColor: '#DDD',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    backgroundColor: Colors.white,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  planName: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  priceBlock: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  price: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  priceLabels: {
    marginBottom: 2,
  },
  currency: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  ht: {
    fontSize: 11,
    color: '#888',
    fontFamily: 'Figtree',
  },
  featuresBlock: {
    gap: 10,
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 12,
  },
  footer: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'Figtree',
  },
});
