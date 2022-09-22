import React from 'react';
import axios from 'axios';
export default class Salaire extends React.Component{
  state = {
  salaire: []
  }
  componentDidMount() {
    axios.get(`https://632c28895568d3cad87e602c.mockapi.io/Salaire`)
    .then(res => {
    const salaire = res.data;
    this.setState({ salaire });
    //console.log("user",users)
    })
    }
    deleteRow(id_emp, e){
      
      axios.delete(`https://632c28895568d3cad87e602c.mockapi.io/Salaire/${id_emp}`)
      .then(res => {
      console.log(res);
      console.log(res.data);
      const salaire = this.state.salaire.filter(item => item.id_emp !== id_emp);
      this.setState({ salaire });
      })
      }
    render() {
      return(
        <>
        <h2 className="text-center">Axios Read/delete Salaire</h2>
        <table className="table table-bordered">
<thead>
<tr>
<th>id</th>
<th>Brute</th>
<th>Nette</th>
<th>Taxes</th>
<th>Avance</th>
<th>Mois</th>
</tr>
</thead>
<tbody>
{this.state.salaire.map((salaires) => (
<tr>
<td>{salaires.id_emp}</td>
<td >{salaires.brute}</td>
<td >{salaires.nette}</td>
<td>{salaires.taxes}</td>
<td>{salaires.avance}</td>
<td>{salaires.mois}</td>
<td>
<button className="btn btn-danger" onClick={(e) => this.deleteRow(salaires.id_emp, e)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
        </>
      )
    };
}