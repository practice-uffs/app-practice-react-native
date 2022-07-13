import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
  },
  buttonContainer: {
    flex: 1,
    height: 40,
    backgroundColor: theme.colors.azul_claro,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_brancoClaro
  }
});