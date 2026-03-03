import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    color: '#555',
    marginBottom: 10,
    fontFamily: 'Figtree',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.lightGrey,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'Figtree',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.black,
    letterSpacing: 0.5,
    fontFamily: 'Figtree',
  },
  buttonTextDisabled: {
    color: '#AAA',
  },
});
