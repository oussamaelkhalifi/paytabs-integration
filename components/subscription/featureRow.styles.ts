import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    gap: 16,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 4,
    lineHeight: 22,
    fontFamily: 'Figtree',
  },
  description: {
    fontSize: 11,
    color: '#555',
    lineHeight: 19,
    fontFamily: 'Figtree',
  },
});
