import React from 'react'
import DataTable from '../../../Services/DataTable'

function Dashboard() {
  return (
    <div>
      <h2> Welcome User</h2>
      <div className='profile info'>
          
      </div>
      <table>
        <caption>Tranactions</caption>
        <DataTable data={data}/>
      </table>
    </div>
  )
}

export default Dashboard
