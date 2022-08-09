import React from 'react';
import { Linking, Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { Button } from '../../components/Button';
import { styles } from './styles';

export function Mural({ navigation }: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Serviços
      </Text>

      <Text style={styles.subtitle}>
        O PRACTICE conta com vários serviços para ajudar você em suas atividades e projetos
      </Text>

      <View style={styles.buttonContainer}>
        <Button 
          isLoading={false}
          icon='success'
          name='Solicitar Serviço' 
        />
      </View>

      <Card style={styles.status}>
          <Text style={styles.subtitle}>
            SOLICITADOS
          </Text>
          <Text style={styles.subtitle}>
            CONCLUÍDOS
          </Text>
          <Text style={styles.subtitle}>
            RECUSADOS
          </Text> 
      </Card>

      <Card style={styles.listRequests}>
        <Text style={styles.subtitle}>
          Você ainda não realizou solicitações
        </Text>
        <Text style={styles.subtitle}>
          Como podemos ajudar você?
        </Text>
      </Card>
    </View>
  );
}