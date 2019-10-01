import React, { Component } from 'react';

class PlayerTableRow extends Component {
  render() {
    const { data } = this.props;

    const row = data.map((data) =>
      <tr key={data.name}>
        <td key={data.name}>{data.name}</td>
        <td key={data.ppr_position_tier}>{data.ppr_position_tier === -1 ? "-" : data.ppr_position_tier }</td>
        <td key={data.ppr_flex_tier}>{data.ppr_flex_tier === -1 ? "-" : data.ppr_flex_tier}</td>
        <td key={data.half_position_tier}>{data.half_position_tier === -1 ? "-" : data.half_position_tier}</td>
        <td key={data.half_flex_tier}>{data.half_flex_tier === -1 ? "-" : data.half_flex_tier}</td>
        <td key={data.standard_position_tier}>{data.standard_position_tier === -1 ? "-" : data.standard_position_tier}</td>
        <td key={data.standard_flex_tier}>{data.standard_flex_tier === -1 ? "-" : data.standard_flex_tier}</td>
      </tr>
    );

    return(
      <tbody>
        { row }
      </tbody>
    );
  }
}

export default PlayerTableRow;