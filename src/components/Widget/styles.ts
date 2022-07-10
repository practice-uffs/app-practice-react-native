import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
  },
  wrapperRBSheet: {
    backgroundColor: 'transparent',
  },
  containerRBSheet: {
    backgroundColor: theme.colors.surface_pretoEscuro,
    paddingBottom: getBottomSpace() + 16,
    height: 800,
  },
  draggableIconRBSheet: {
    backgroundColor: theme.colors.text_brancoEscuro,
    width: 56,
    padding: 0
  }
});