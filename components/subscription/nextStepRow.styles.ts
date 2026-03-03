import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  label: {
    flex: 1,
    fontSize: 15,
    color: Colors.black,
    fontFamily: 'PlusJakartaSans',
    lineHeight: 22,
  },
});
