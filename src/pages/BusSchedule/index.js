import axios from 'axios';
import { React, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const BusSchedule = () => {
  //dias pro Picker
  const diasDaSemana = [
    { label: 'Segunda', value: 1 },
    { label: 'Terça', value: 2 },
    { label: 'Quarta', value: 3 },
    { label: 'Quinta', value: 4 },
    { label: 'Sexta', value: 5 },
    { label: 'Sábado', value: 6 },
    { label: 'Domingo', value: 7 }
  ];

  //vai segurar o value do dia
  const [diaSelecionado, setDiaSelecionado] = useState("1");
  //vai segurar array de objetos conseguidas do post request
  const [horarios, setHorarios] = useState([]);
  
  //guardar o valor quando o selecionar no picker
  const handleInputChange = (itemValue) => {
    //Só pra não correr risco de tentar selecionar undefined
    if (itemValue !== undefined) {
      setDiaSelecionado(itemValue);
    }
  };
  //quando for fzer submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //configurando header pro axios fzr o request
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }
    //formatando o body pro request
    var details = {
      'linha': '23',
      'diaSemana': diaSelecionado,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    //body formatado pro request
    formBody = formBody.join("&");

    try {
      const response = await axios.post('http://beta.eagletrack.com.br/api/coletivos/linhas/listar/horarios', formBody, config);
      //atualizando os objetos
      setHorarios(response.data);
      console.log()
    } catch (error) {
      console.error('Erro no POST request:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o dia da semana:</Text>
      <Picker
        selectedValue={diaSelecionado}
        onValueChange={handleInputChange}
        style={styles.picker}
      >
        {diasDaSemana.map((dia) => (
          <Picker.Item key={dia.value} label={dia.label} value={dia.value} />
        ))}
      </Picker>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      {horarios.length > 0 && (
        <View style={styles.horariosContainer}>
          <Text style={styles.title}>Horários disponíveis:</Text>
          <ScrollView style={styles.horariosList}>
            {horarios.map((horario, index) => (
              <View key={index} style={styles.horarioItem}>
<<<<<<< HEAD
                <Text>Linha: {horario.lidescricao}</Text>
=======
                <Text>Descrição: {horario.lidescricao}</Text>
>>>>>>> f11d5c9fe9cf114d84204660f8bffe0fc7a24382
                <Text>Horário: {horario.hrhorario}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default BusSchedule;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horariosContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  horariosList: {
    maxHeight: 300,
  },
  horarioItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  picker: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    minHeight: 40, // Ajuste a altura do botão
  },
  button: {
    backgroundColor: '#2F7B9A',
    paddingVertical: 8, // Ajuste o padding vertical para tornar o botão mais compacto
    paddingHorizontal: 15, // Ajuste o padding horizontal para tornar o botão mais compacto
    borderRadius: 5,
    marginTop: 10, // Adicione margem superior para separar o botão do Picker
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

