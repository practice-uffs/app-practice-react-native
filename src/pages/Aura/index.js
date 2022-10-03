import React, {useContext} from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { theme } from '../../styles/theme';
import { WebView } from 'react-native-webview';
import API from '../../services/api';
import { AuthContext } from '../../context/auth';
import axios from 'axios';
import { Block, Text } from 'galio-framework';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from "@react-native-material/core";

export default function Aura() {
  const win = Dimensions.get('window');
  const ratio = win.width / 525;
  
  const { token } = useContext(AuthContext);
  const [auraError, setAuraError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const checkAura = async () => {
    setLoading(true);
    try {
      await axios.get(`${API.url}widgets/aura`);
    } catch (error) {
      setAuraError(true);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    checkAura();
  }, []);

  if (loading) {
    return (
      <Block flex={1} middle>
        <ActivityIndicator size="large" />
      </Block>
    );
  }

  if (auraError) {
    return (
      <Animatable.View flex={1} delay={600} animation="fadeInUp">
        <Block flex={1} middle>
          <Image
            source={require('../../assets/images/undraw_warning.png')}
            resizeMode='contain'
            style={{width: '70%', height: 418 * ratio *0.7, margin: 20 }}
          />
          <Text h6 muted>
            Algo deu Errado!
          </Text>
          <Block marginTop={10} marginLeft={20} marginRight={20}>
            <Text size={16} style={{textAlign:'center'}}>
              Não foi possível conectar-se a Aura. Verifique sua conexão ou tente novamente mais tarde
            </Text>
          </Block>
        </Block>
      </Animatable.View>
    );
  } else {
    return (
      <View flex={1}>
        <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            source={{uri: `${API.url}widgets/aura?token=${token}`}}
            automaticallyAdjustContentInsets={false}
          />
      </View>
    );
  }

}