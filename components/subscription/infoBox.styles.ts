import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EBEBEB',
    borderRadius: 14,
    padding: 16,
    marginBottom: 28,
    gap: 12,
    alignItems: 'flex-start',
  },
  iconWrapper: {
    marginTop: 1,
  },
  text: {
    flex: 1,
    fontSize: 13,
    color: '#444',
    lineHeight: 19,
    fontFamily: 'PlusJakartaSans',
  },
  boldLabel: {
    fontWeight: '700',
    fontFamily: 'PlusJakartaSansBold',
  },
});
