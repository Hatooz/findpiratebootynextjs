export type Player = {
  id: number;
  name: string;
  level: number;
};

export const getPlayers = async (): Promise<Player[]> => {
  console.log(process.env.BASE_URL);
  // const res = await axios.get("process.env.BASE_URLapi/player");
  const res = await fetch(`${process.env.BASE_URL}/api/player`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  console.log(json);
  return json;
};
