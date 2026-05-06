import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.text,
  },
  refreshWrap: {
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  btnLg: {
    minWidth: 110,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLgText: {
    color: colors.primaryText,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    backgroundColor: colors.surface,
    padding: 12,
  },
  line: {
    fontSize: 16,
    color: colors.text,
  },
  meta: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 4,
  },
});

