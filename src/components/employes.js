import React from 'react';
import axios from 'axios';
export default class Employes extends React.Component{
  state = {
  Employes: [],
  nom:'',
  prenom:'',
  age:'',
  grade:'',
  adresse:'',
  }

  onChange= e=> {
    this.setState({ [e.target.name] :e.target.value});
};

  componentDidMount() {
    axios.get(`https://632c28895568d3cad87e602c.mockapi.io/Employes`)
    .then(res => {
    const Employes = res.data;
    this.setState({ Employes });
    //console.log("user",users)
    })
    }


    deleteRow(id, e){
      
      axios.delete(`https://632c28895568d3cad87e602c.mockapi.io/Employes/${id}`)
      .then(res => {
      console.log(res);
      console.log(res.data);
      const Employes = this.state.Employes.filter(item => item.ID !== id);
      this.setState({ Employes });
      })
      }

      addUser=event => {
        let ag = this.state.age;
        let grad = this.state.grade;
        if(ag>20)
        {
            ag = ag;
        }
        else
         {
            ag = '';
         }
        if(grad === "ouvrier" || "ingénieur" || "technicien" || "admin")
        {
          grad = grad;
        }
        else
        {
          grad = ' ERREUR ';
        }
            const userObject={          
                nom:this.state.nom,
                prenom:this.state.prenom,
                age:ag,
                grade:grad,
                adresse:this.state.adresse,
                } 
        axios.post(`https://632c28895568d3cad87e602c.mockapi.io/Employes/`, userObject)
        .then(res => {  
        this.setState({ 
            nom:'',
            prenom:'',
            age:'',
            grade:'',
            adresse:'',
                     });
        })
        event.preventDefault();
        alert("ajouté ");
        window.location.reload();
        }

// pattern="[a-zA-Z ]*"
    render() {
      return(
        <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Ajouter Employes
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Ajout d'Employes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form method="post" onSubmit={this.addUser}>
               
                Nom:<input className="form-control" type="text" pattern="[a-zA-Z ]*" minlength="3" value={this.state.nom} onChange={this.onChange} name="nom"></input>
                <br></br>Prenom:<input type="text" className="form-control" pattern="[a-zA-Z ]*" minlength="3" value={this.state.prenom} name="prenom" onChange={this.onChange}></input>
                <br></br>age:<input type="number" className="form-control" value={this.state.age} name="age" onChange={this.onChange}></input>
                <br></br>grade<input type="text" className="form-control" value={this.state.grade} name="grade" onChange={this.onChange}></input>
                <br></br>adresse<input type="text" minlength="20" className="form-control" value={this.state.adresse} name="adresse" onChange={this.onChange}></input>
                <br></br><button className='btn btn-primary' type="submit" >Ajouter</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        
      </div>
    </div>
  </div>
</div>

        <h2 className="text-center">Axios Read/delete Employe</h2>
        <table className="table table-bordered">
<thead>
<tr>
<th>id</th>
<th>nom</th>
<th>prenom</th>
<th>age</th>
<th>grade</th>
<th>adresse</th>
</tr>
</thead>
<tbody>
{this.state.Employes.map((employes) => (
<tr>
<td>{employes.id}</td>
<td >{employes.nom}</td>
<td>{employes.prenom}</td>
<td>{employes.age}</td>
<td>{employes.grade}</td>
<td>{employes.adresse}</td>
<td>
<button className="btn btn-danger" onClick={(e) => this.deleteRow(employes.id, e)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
        </>
      )
    };
}
