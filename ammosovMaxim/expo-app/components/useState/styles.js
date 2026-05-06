import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    paddingVertical: 12,
  },
  headerRow: {
    backgroundColor: colors.surface2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cell: {
    paddingHorizontal: 4,
  },
  nameCell: {
    flex: 2,
  },
  qtyCell: {
    flex: 2,
  },
  headerText: {
    fontWeight: '700',
  },
  labelText: {
    fontSize: 16,
  },
  valueText: {
    fontWeight: '700',
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
  },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 22,
  },
  qtyText: {
    minWidth: 28,
    textAlign: 'center',
    fontSize: 16,
  },
  input: { 
    flex: 2,
    borderWidth: 1, 
    borderColor: colors.border, 
    borderRadius: 8,
    padding: 12, 
    marginBottom: 12, 
    backgroundColor: colors.bg,
    fontSize: 16,
    color: colors.text,
  },
});

