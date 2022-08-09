import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: theme.colors.azul_escuro,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 40
  },
  rowItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_brancoClaro
  },
});