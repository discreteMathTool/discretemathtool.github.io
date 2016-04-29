import React, { PropTypes } from 'react'

export default function Table ({ data }) {

  return (
    <table>
      <tbody>
        {data.map(row => 
          <tr>
            {row.map(col =>
              <td>{col}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data  : React.PropTypes.array.isRequired,
}
