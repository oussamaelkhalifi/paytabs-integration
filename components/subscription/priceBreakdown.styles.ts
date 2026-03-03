import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 12,
    fontFamily: 'Figtree',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Figtree',
  },
  value: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  discountValue: {
    color: '#2E7D32',
  },
  totalRow: {
    marginTop: 4,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  totalValue: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Figtree',
  },
});
