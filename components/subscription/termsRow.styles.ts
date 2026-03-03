import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 24,
  },
  text: {
    flex: 1,
    fontSize: 13,
    color: Colors.black,
    lineHeight: 20,
    fontFamily: 'Figtree',
  },
  link: {
    textDecorationLine: 'underline',
  },
});
