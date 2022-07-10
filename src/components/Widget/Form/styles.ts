import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 16
  },
  titleContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24
  },
  titleText: {
    fontSize: 20,
    color: theme.colors.text_brancoEscuro,
    fontFamily: theme.fonts.medium
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8 
  },
  input: {
    width: '100%',
    height: 96,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_brancoEscuro,
    fontFamily: theme.fonts.regular
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 16
  }
});