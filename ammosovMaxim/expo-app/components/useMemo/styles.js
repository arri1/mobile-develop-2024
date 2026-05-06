import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  pickerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  pickerLabel: {
    color: colors.muted,
    fontSize: 14,
  },
  pickerContainer: {
    flex: 1,
  },
  list: {
    padding: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  cardFull: {
    width: '100%',
  },
  cardFullSpaced: {
    width: '100%',
    marginTop: 12,
  },
  cardInner: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
    color: colors.text,
  },
  text: {
    fontSize: 14,
    color: colors.text,
  },
  bold: {
    fontWeight: '700',
  },
  buttonWrap: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: colors.primary,
    color: colors.primaryText,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: '700',
  },
});

