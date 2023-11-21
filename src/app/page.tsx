export interface Player {
  id: number;
  name: string;
  level: number;
}

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/api/player`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  const players = (await res.json()) as Player[];
  // console.log(players);

  return (
    <>
      <div>Booty</div>
      {players.map((player) => {
        return <div key={player.id}>{player.name}</div>;
      })}
    </>
  );
}
