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
   let hTable = {};
   for(let key in this.state.list[0]){
    hTable[key] = key;
  }
  console.log(hTable)
      return (
        <tr key={hTable.nombre}>
            <th>{hTable.nombre}</th>
            <th>{hTable.nivel}</th>
            <th>{hTable.goles}</th>
            <th>{hTable.sueldo}</th>
            <th>{hTable.bono}</th>
            <th>{hTable.sueldo_completo}</th>
            <th>{hTable.equipo}</th>
        </tr>
      )

  }


render() {
return (
  <div>
        <h1 id='title'>Resuelve FC Leauge</h1>
        <table id='players'>
           <tbody>
              {this.renderTableHeader()}
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
      )
  }
}

export default PlayerList;
