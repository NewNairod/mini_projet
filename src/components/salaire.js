import React from 'react';
import axios from 'axios';
export default class Salaire extends React.Component{
  state = {
  salaire: [],
  nette:'',
  brute:'',
  taxes:'',
  avances:'',
  mois:'',
  }

  addUser=event => {
    const userObject={
        nette:this.state.nette,
        brute:this.state.brute,
        taxes:this.state.taxes,
        avances:this.state.avances,
        mois:this.state.mois,

    }
    
    axios.post(`https://632c28895568d3cad87e602c.mockapi.io/Salaire/`,userObject)
    .then(res => {
    
    this.setState({ 
        nette:'',
        brute:'',
        taxes:'',
        avances:'',
        mois:'',
 });
    })
    event.preventDefault();
    alert("ajouté avec succés");
    window.location.reload();
    }
    onChange= e=> {
        this.setState({ [e.target.name] :e.target.value});
    };

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

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ajouter Salaire
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Ajout de salaire</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form method="post" onSubmit={this.addUser}>
               
                Brute:<input className="form-control" type="number" value={this.state.brute} onChange={this.onChange} name="nom"></input>
                <br></br>Nette:<input type="number" className="form-control" value={this.state.nette} name="prenom" onChange={this.onChange}></input>
                <br></br>Taxes:<input type="number" className="form-control" value={this.state.taxes} name="email" onChange={this.onChange}></input>
                <br></br>Avances<input type="number" className="form-control" value={this.state.avances} name="password" onChange={this.onChange}></input>
                <br></br>Mois<input type="text" className="form-control" value={this.state.mois} name="password" onChange={this.onChange}></input>
                <br></br><button className='btn btn-primary' type="submit" >Ajouter</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        
      </div>
    </div>
  </div>
</div>

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