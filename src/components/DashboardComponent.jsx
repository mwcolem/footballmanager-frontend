import React from 'react';
import PlayerTable from "./PlayerTable";

export const DashboardComponent = ({players}) => {
  return(
    <div>
      <h2>Player Information</h2>
      <PlayerTable data={players}/>
    </div>
  )
};