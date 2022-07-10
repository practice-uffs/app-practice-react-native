import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.text_brancoEscuro,
    alignItems: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    backgroundColor: theme.colors.background_cinza
  },
  barcodecam: { 
    width: '100%',
    height: '100%', 
  }
});