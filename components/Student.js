import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Student extends Component {
  
  constructor (props) {
    super(props)
    fetch('http://88.201.187.23:8888/s/' + this.props.params.studentID + '/info')
      .then(response => response.json())
      .then(student => {
        fetch('http://88.201.187.23:8888/s/' + this.props.params.studentID + '/tests')
          .then(response => response.json())
          .then(tests => {
            this.setState({
              student : student,
              tests   : tests,
            })
          })
      })
      .catch(console.error)
  }

  render () {
    return (
      <div id="student-page" className="content-wrap">
        {this.state ? 
          <div>
            <div className="user">
              <img src={this.state.student.photo} className="photo"/>
              <div className="info">
                <div className="name field">{this.state.student.first_name} {this.state.student.last_name}</div>
                <div className="group field">
                  Группа
                  &nbsp;<Link to={'/group/' + this.state.student.group}>{this.state.student.group}</Link>
                </div>
                <div className="email field">
                  <a href={'mailto:' + this.state.student.email}>{this.state.student.email}</a>
                </div>
              </div>
            </div>
            <div className="tests">
              <h2>Тесты</h2>
              <ul>
                {this.state.tests ? this.state.tests.map(test => {
                  return (<li className="student" key={test._id}>
                    {test.finished ? 
                      <span>{test.testName} - пройден - время {Math.floor(test.duration / 60)}мин {Math.floor(test.duration) % 60}с</span>
                    : null}
                  </li>)
                }) : null}
              </ul>
            </div>
          </div>
        : null}
      </div>
    )
  }
}
