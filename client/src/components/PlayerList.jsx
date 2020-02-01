import React from 'react';
import $ from 'jquery';
import './PlayerList.css'

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: false,
    }
    this.getPlayerList = this.getPlayerList.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  getPlayerList() {
    $.ajax({
      url: '/teamdata',
      method: 'GET',
      success: (results) => {
        this.setState({
          list: results,
          isLoaded: true,
        });
        //console.log(this.state.list);
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    this.getPlayerList();
    this.renderTableHeader();
  }

  renderTableData() {
    return this.state.list.map((player, index) => {
       const { nombre, nivel, goles, sueldo, bono, sueldo_completo, equipo} = player //destructuring
       return (
          <tr key={nombre}>
             <td>{nombre}</td>
             <td>{nivel}</td>
             <td>{goles}</td>
             <td>{sueldo}</td>
             <td>{bono}</td>
             <td>{sueldo_completo}</td>
             <td>{equipo}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
   if(this.state.isLoaded === false){
     console.log("is empty");
   }else{
     console.log("is full");
   }
     // let header = Object.keys(this.state.list[0])
     // return header.map((key, index) => {
     //    return <th key={index}>{key.toUpperCase()}</th>
     // })
     //console.log(this.state.list,"trigerr");
  }


  render() {
    console.log(this.state.list);
return (
  <div>
        <h1 id='title'>Resuelve FC Leauge</h1>
        <table id='players'>
           <tbody>

              {this.renderTableData()}
           </tbody>
        </table>
     </div>
      )
  }
}

export default PlayerList;
