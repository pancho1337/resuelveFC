import React from 'react';
import $ from 'jquery';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.getPlayerList = this.getPlayerList.bind(this);
  }

  getPlayerList() {
    $.ajax({
      url: '/teamdata',
      method: 'GET',
      success: (results) => {
        this.setState({list: results
        });
        console.log(this.state.list);
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    this.getPlayerList();
  }

  render() {
    return (
      <div>
      <h1>Grocery List</h1>
      </div>)
  }
}

export default PlayerList;
