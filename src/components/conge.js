import React from 'react';
import axios from 'axios';
export default class Conge extends React.Component{
  state = {
  Conge: []
  }
  componentDidMount() {
    axios.get(`https://632c28895568d3cad87e602c.mockapi.io/Conge`)
    .then(res => {
    const Conge = res.data;
    this.setState({ Conge });
    //console.log("user",users)
    })
    }
    deleteRow(id_emp, e){
      
      axios.delete(`https://632c28895568d3cad87e602c.mockapi.io/Conge/${id_emp}`)
      .then(res => {
      console.log(res);
      console.log(res.data);
      const Conge = this.state.Conge.filter(item => item.id_emp !== id_emp);
      this.setState({ Conge });
      })
      }
    render() {
      return(
        <>
        <h2 className="text-center">Axios Read/delete Conge</h2>
        <table className="table table-bordered">
<thead>
<tr>
<th>id</th>
<th>Duree</th>
<th>Type</th>
<th>Debut</th>
<th>Cause</th>
</tr>
</thead>
<tbody>
{this.state.Conge.map((Conges) => (
<tr>
<td>{Conges.id_emp}</td>
<td >{Conges.duree}</td>
<td >{Conges.type}</td>
<td>{Conges.debut}</td>
<td>{Conges.cause}</td>
<td>
<button className="btn btn-danger" onClick={(e) => this.deleteRow(Conges.id_emp, e)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
        </>
      )
    };
}