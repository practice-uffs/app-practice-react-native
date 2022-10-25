import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { theme } from '../../styles/theme';
const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={theme.darkBlue} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Carregando...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: theme.colors.whiteBackground,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loader;