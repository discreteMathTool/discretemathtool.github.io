import React, { Component } from 'react'
import values from 'object.values'

export default class Group extends Component {
  
  constructor (props) {
    super(props)
    fetch('http://88.201.187.23:8888/getGroup/' + parseInt(this.props.params.groupID))
      .then(response => response.json())
      .then(group => {
        this.setState(group)
      })
      .catch(console.error)
  }

  render () {
    return (
      <div id="groups-page" className="content-wrap">
        <h1>Группа {this.props.params.groupID}</h1>
        <ul className="students">
          {this.state ? values(this.state).map(student => {
            return (<li className="student" key={student._id}>
              <a href={'/s/' + student._id + '/info'}>
                <img src={student.photo} className="photo" />
                <span className="name">{student.first_name} {student.last_name}</span>
              </a>
            </li>)
          }) : null}
        </ul>
      </div>
    )
  }
}