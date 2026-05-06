import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 16, color: colors.text },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: 12, marginBottom: 12, backgroundColor: colors.bg },
  error: { color: colors.danger, textAlign: 'center', marginBottom: 12 },
  linkWrap: { marginTop: 16, alignItems: 'center' },
  link: { color: colors.primary, fontWeight: '600' },
});

export default styles;


