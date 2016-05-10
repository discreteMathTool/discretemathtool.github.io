import React, { Component } from 'react'
import Table from '../Table'

export default class ConversionShow extends Component {

  constructor (props) {
    super(props)
    this.refreshExample()
  }

  state = {}

  refreshExample () {
    fetch('http://bastards.noip.me:8888/solve/conversion')
      .then(response => response.json())
      .then(example => {
        this.setState(example)
      })
      .catch(console.error)
  }

  render () {
    return (
      <div>
        {this.state.input ? 
          <div>
            <h1>Перевод из одной системы счисления в другую</h1>
            <h2>Демонстрация</h2>
            <p>Певевести {this.state.input[0]} из системы счисления {this.state.input[1]} в {this.state.input[2]}</p>
            <Table data={this.state.table.map(row => row.map(col => 
                <div className="number-wrap">{col}</div>
            ))}/>
            <code>Ответ: {this.state.output}</code>
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