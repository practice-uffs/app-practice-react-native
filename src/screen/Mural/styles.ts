import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_cinza
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 6,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_cinza
  },
  buttonContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  status: {
    marginBottom: 20
  },
  listRequests: {

  }
});