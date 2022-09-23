import React from 'react';
import axios from 'axios';
export default class Conge extends React.Component{
  constructor()
  {
  super();
  this.state = {
  Conge: [],
  duree:'',
  type:'',
  debut:'',
  cause:'',
  };
  this.componentDidMount = this.componentDidMount.bind(this);
  this.deleteRow = this.deleteRow.bind(this);
  }
  
  onChange= e=> {
    this.setState({ [e.target.name] :e.target.value});
};

addUser=event => {
  let typ = this.state.type;
  let caus = this.state.cause;
  if(typ === "repos" || "maladie" || "urgent" || "longue durée")
  {
    typ = this.state.type;
    if(typ !== "repos")
    {
      caus = caus;
    }
    else
    {
      // eslint-disable-next-line no-unused-expressions
      caus != undefined; 
    }
  }
  else
   {
    typ = 'erreur';
   }
  const userObject={
      duree:this.state.duree,
      type:typ,
      debut:this.state.debut,
      cause:caus,

  }
  
  axios.post(`https://632c28895568d3cad87e602c.mockapi.io/Conge/`,userObject)
  .then(res => {
  
  this.setState({ 
      duree:'',
      type:'',
      debut:'',
      cause:'',
});
  })
  event.preventDefault();
  alert("ajouté ");
  window.location.reload();
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
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ajouter Conge
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Ajout de conge</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form method="post" onSubmit={this.addUser}>
               
                Duree:<input className="form-control" type="number" min="1" value={this.state.duree} onChange={this.onChange} name="duree"></input>
                <br></br>Type:<input type="text" className="form-control" value={this.state.type} name="type" onChange={this.onChange}></input>
                <br></br>Debut:<input type="date" className="form-control" value={this.state.debut} name="date" onChange={this.onChange}></input>
                <br></br>Cause:<input type="text" className="form-control" value={this.state.cause} name="cause" onChange={this.onChange}></input>
                <br></br><button className='btn btn-primary' type="submit" >Ajouter</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        
      </div>
    </div>
  </div>
</div>

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