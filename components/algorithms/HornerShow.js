import React, { Component } from 'react'
import Table from '../Table'

export default class HornerShow extends Component {

  constructor (props) {
    super(props)
    this.refreshExample()
  }

  state = {}

  refreshExample () {
    fetch('http://bastards.noip.me:8888/solve/horner')
      .then(response => response.json())
      .then(example => {
        this.setState(example)
      })
      .catch(console.error)
  }

  polynomial (factors) {
    return factors.map((c, i) => {
      return i < factors.length - 1 ? // Будет ли при коэфиценте стоять x
        c + 'x^' + (factors.length - i) : c
    }).join('+')
  }

  render () {
    return (
      <div>
        {this.state.input ? 
          <div>
            <h1>Схема Горнера</h1>
            <h2>Демонстрация</h2>
            <p>Поделим многочлен {this.polynomial(this.state.input[0])} на бином (x-{this.state.input[1]})</p>
            <Table data={this.state.table.map(row => row.map(col => 
                <div className="number-wrap">{col}</div>
            ))}/>
            <code>Ответ: (x-{this.state.input[1]})({this.polynomial(this.state.table[1].slice(1, -1))})
              +{this.state.table[1].slice(-1).pop()}
            </code>
            <div className="button-wrap">
              <button onClick={e => this.refreshExample()}>Обновить</button>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}