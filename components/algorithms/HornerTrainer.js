import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Table from '../Table'

export default class HornerTrainer extends Component {

  constructor (props) {
    super(props)
    this.refreshExample()
  }

  state = {}

  refreshExample () {
    fetch('http://bastards.noip.me:8888/solve/horner')
      .then(response => response.json())
      .then(example => {
        let inputs = ReactDOM.findDOMNode(this).querySelectorAll('input[type="number"]'); // Fuck JavaScript
        [].forEach.call(inputs, input => {
          input.value = ''
          input.classList.remove('ok')
          input.classList.remove('wrong')
        })
        this.setState(example)
      })
      .catch(console.error)
  }

  check (event) {
    if (event.currentTarget.value != '') {
      if (event.currentTarget.value === event.currentTarget.dataset.original) {
        event.currentTarget.classList.remove('wrong')
        event.currentTarget.classList.add('ok')
      }
      else {
        event.currentTarget.classList.remove('ok')
        event.currentTarget.classList.add('wrong')
      }
    }
  }

  polynomial (factors) {
    return factors.map((c, i) => {
      return i < factors.length - 1 ? // Будет ли при коэфиценте стоять x
        c + 'x^' + (factors.length - i) : c
    }).join('+')
  }

  render () {
    return (
      <div className="content-wrap">
        <h1>Схема Горнера</h1>
        <h2>Тренажёр</h2>
        {this.state.input ? 
          <div>
            <p>Поделим многочлен {this.polynomial(this.state.input[0])} на бином (x-{this.state.input[1]})</p>
            <Table data={this.state.table.map(row => row.map(col => 
              col !== '' ? (
                <div className="input-number-wrap">
                  <input type="number" data-original={col} onBlur={e => this.check(e)}/>
                  <i className="checker"></i>
                </div>
              ) : null
            ))}/>
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