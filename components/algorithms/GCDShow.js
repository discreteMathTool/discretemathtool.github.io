import React, { Component, PropTypes } from 'react'
import Table from '../Table'

export default class GCDShow extends Component {

  static examples = [
    {
      input : [178, 24],
      table : [
        [178, 24, 10, 4, 2, 0],
        ['', '', 7, 2, 2, 2],
      ],
      output : 2,
    },
    {
      input : [235, 80],
      table : [
        [235, 80, 75, 5, 0],
        ['', '', 2, 1, 15],
      ],
      output : 5,
    },
  ]

  state = GCDShow.examples[Math.floor(Math.random()*GCDShow.examples.length)]

  refreshExample () {
    if (GCDShow.examples.length > 1) {
      let newExampleIndex = Math.floor(Math.random()*GCDShow.examples.length)
      while (GCDShow.examples[newExampleIndex].input.every((x, i) => x == this.state.input[i])) {
        newExampleIndex = Math.floor(Math.random()*GCDShow.examples.length)
      }
      this.setState(GCDShow.examples[newExampleIndex])
    }
  }

  render () {
    return (
      <div className="content-wrap">
        <h1>Наибольший общий делитель</h1>
        <h2>Демонстрация</h2>
        <p>Даны числа {this.state.input.join(', ')}.</p>
        <p>Применим к ним алгоритм Евклида.</p>
        <p>Получим следующую таблицу:</p>
        <Table data={this.state.table.map(row => row.map(col => 
            <div className="number-wrap">{col}</div>
        ))}/>
        <code>НОД({this.state.input.join(', ')}) = {this.state.output}</code>
        <button onClick={e => this.refreshExample()}>Обновить</button>
      </div>
    )
  }
}