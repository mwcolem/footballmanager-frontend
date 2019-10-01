import React, { Component } from 'react';
import {DashboardComponent} from "./DashboardComponent";

class DashboardContainer extends Component {
  constructor(props){
    super(props);

    this.state={
      players: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/players');
      const players = await res.json();
      this.setState({players});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <DashboardComponent
        players={this.state.players}
      />
    );
  }
}

export default DashboardContainer;