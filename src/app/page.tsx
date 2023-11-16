import axios from "axios";
export interface Player {
  id: number;
  name: string;
  level: number;
}

export default async function Home() {
  const players = (await axios.get(`${process.env.BASE_URL}/api/player`))
    .data as Player[];
  console.log(players);

  return (
    <>
      {players.map((player) => {
        return <div key={player.id}>{player.name}</div>;
      })}
    </>
  );
}
