import React, { Component } from 'react';
import PlayerTableRow from "./PlayerTableRow";

class PlayerTable extends Component {
  processData() {
    let data = this.props.data;
    // data.map(player => {
    //   if(player.ppr_position_tier === -1 &&
    //     player.ppr_flex_tier === -1 &&
    //     player.half_position_tier === -1 &&
    //     player.half_flex_tier === -1 &&
    //     player.standard_position_tier === -1 &&
    // });
    return data;
  }

  render() {
    return(
      <table>
        <tr>
          <td>Name</td>
          <td>PPR Position</td>
          <td>PPR Flex</td>
          <td>Half Position</td>
          <td>Half Flex</td>
          <td>Std Position</td>
          <td>Std Flex</td>
        </tr>
        <PlayerTableRow
          data={this.processData()}
        />
      </table>
    );
  }
}

export default PlayerTable;