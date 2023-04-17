import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { theme } from '../../styles/theme';

export default class Scheadule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Horário', 'Aula', 'Sala'],
      tableData: props.tableData
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent', borderWidth: 0}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: {
    height: 40},
  text: {
    margin: 12,
    fontSize: 15,
    textAlign: 'center' },
  textHead: {
    color: theme.colors.darkOrange,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25 },
  h1: {
      color: theme.colors.darkOrange,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 30
    },
    classHead: {
      color: theme.colors.darkOrange,
      fontWeight: 'bold',
      fontSize: 20,
    },
    classContainer: {
      alignItems: 'center'
    },
    classSubContainer: {
      alignItems: 'flex-start'
    }
});