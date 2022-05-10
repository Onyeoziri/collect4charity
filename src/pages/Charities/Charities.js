import { data } from 'cheerio/lib/api/attributes'
import React, {useState, useEffect, Component} from 'react'
import DataTable from '../Services/DataTable'
import axios from 'axios'
import './charities.css'

/*
function Charities(){
  const [data, setData] = useState({})

  useEffect(() =>{
    fetch("http://localhost:3001/charities")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
  return(
    <div>{ <DataTable data={data}/> }</div>
  )
}
*/


class Charities extends Component{
  state={
    charities: []
  }
  
  
  componentDidMount(){
    axios.get('http://localhost:4000/charities')
    .then(res => {
      console.log(res);
      const charities = res.data
      this.setState({charities})
    })
  }
  
  

  /*
callBackendAPI() {
  fetch("http://localhost:3001/charities")
  .then(res => res.text())
  .then(res => this.setState({ apiResponse: res}))
  .catch(err => err);
}
*/
render(){
  return(
    <div>
      <p>
        <table>
          <th>Name</th>
          <th>Location</th>
          <th>ID</th>
          <th>Category</th>
       {this.state.charities.map(charity =>
       <tr>
        <td>{charity.charityName} </td>
        <td>{charity.location}</td>
        <td>{charity.charityID}</td>
        <td>{charity.category}</td>
        </tr>
        )}
        </table>
      </p>
      <p>

      </p>
    </div>

  )
}
 

/*   const[data, setData] = useState([])
  const [q, setQ] = useState

  useEffect(() => {
    fetch()
    .then(response => response.json())
    .then((json) => setData(json))
  }, []) */

  // return (
  //   <div>
  //     {/* <DataTable data={data}/> */}
  //   </div>
  // )

//}
}
export default Charities
