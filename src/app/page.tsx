// "use client";
// import { useEffect } from "react";

import { getPlayers } from "./api/player/route";

export default async function Home() {
  const players = await getPlayers();
  console.log(players);

  return (
    <>
      {players.map((player) => {
        return <div key={player.id}>{player.name}</div>;
      })}
    </>
  );
}
