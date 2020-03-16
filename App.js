import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      resultText: '',
      calculationText: ''
    }

    this.operations = ['DEL', '/', '*', '-', '+', 'C']
  }

  buttonPressed(text) {
    if (text === '=') {
      return this.validate && this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText + text
    })
  }

  calculateResult() {
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }

  validate() {
    const text = this.state.resultText
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  operate(operation) {
    switch (operation) {
      case 'DEL':
        const text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break

      case 'C':
        this.setState({
          resultText: '',
          calculationText: ''
        })
        break

      case '+':

      case '-':

      case '*':

      case '/':

        const lastChar = this.state.resultText.split('').pop()
        if (this.operations.indexOf(lastChar) > 0) return
        if (this.state.text === "''") return
        this.setState({
          resultText: this.state.resultText + operation
        })


    }
  }

  render() {
    let rows = []
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={() => this.buttonPressed(nums[i][j])}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(
        <View key={i} style={styles.row}>{row}</View>
      )
    }

    let ops = []
    for (let i = 0; i < 6; i++) {
      ops.push(
        <TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
          <Text style={styles.btnText}>{this.operations[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
          <View style={styles.show}></View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white'
  },
  resultText: {
    fontFamily : 'Helvetica Narrow, sans-serif',
    fontSize: 50,
    color: 'black'
  },
  calculation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white'
  },
  calculationText: {
    fontSize: 25,
    color: 'black'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 30,
    color: 'white'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    color: 'white'

  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
    justifyContent: 'space-around',

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#434343'
  },
  show : {
    flex : 0.3,
    backgroundColor : '#4dffb8'
  }
})