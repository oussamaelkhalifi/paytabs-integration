import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 15,
    color: '#A1A1A1',
    marginBottom: 32,
  },
  option: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
  },
  optionSelected: {
    borderColor: '#000',
  },
  optionDisabled: {
    // opacity: 0.8,
  },
  optionTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  optionPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#000',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#BAE6FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  discountTag: {
    marginTop: 2,
    backgroundColor: '#86EFAC',
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 4,
  },
  discountText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 24,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
