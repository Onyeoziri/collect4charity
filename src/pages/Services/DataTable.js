import React from 'react'

function DataTable ({data}) {
    const columns = data[0] && Object.keys(data)

  return <table cellPadding={0} cellSpacing={0}>
    <thread>
        <tr>
            {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
    </thread>
    <tbody>
        {data.map(row =>
            {
                columns.map(column => <td>{row[column]}</td>)
            }
            )}
    </tbody>
  </table>
}

export default DataTable
