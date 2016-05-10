import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Table from '../Table'

export default class HornerTest extends Component {

  constructor (props) {
    super(props)
    this.refreshExample()
  }

  state = {}

  refreshExample () {
    fetch('http://bastards.noip.me:8888/test/horner')
      .then(response => response.json())
      .then(example => {
        let inputs = ReactDOM.findDOMNode(this).querySelectorAll('input[type="number"]'); // Fuck JavaScript
        [].forEach.call(inputs, input => input.value = '')
        this.setState(example)
      })
      .catch(console.error)
  }

  check () {
    let tableNode = ReactDOM.findDOMNode(this).querySelectorAll('.table tr');
    let table = [].map.call(tableNode, tr => {
      return [].map.call(tr.querySelectorAll('input[type="number"]'), input => {
        return input.value !== '' ? parseInt(input.value) : ''
      })
    })
    fetch('http://bastards.noip.me:8888/test/horner', {
      method  : 'post',
      headers : new Headers({
        'Content-Type': 'application/json'
      }),
      body    : JSON.stringify({
        input  : this.state.input,
        table  : table,
      }),
    })
      .then(response => response.json())
      .then(response => this.setState({
        ...this.state,
        status : response.status,
      }))
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
      <div className="content-wrap">
        <h1>Схема Горнера</h1>
        <h2>Контроль</h2>
        {this.state.input ? 
          <div>
            <p>Поделим многочлен {this.polynomial(this.state.input[0])} на бином (x-{this.state.input[1]})</p>
            <div className="table">
              <Table data={this.state.table.map((row, i) => row.map((col, j) => {
                return i == 0 && j == 0 ? <input type="number" disabled={true}/> : <input type="number"/>
              }))}/>
            </div>
            <div className="button-wrap">
              <button onClick={e => this.check(e)}>Проверить</button>
                {this.state.status !== undefined ?
                  (this.state.status ? 
                    <i className="checker ok"></i> : <i className="checker wrong"></i>
                  )
                  : null
                }
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}