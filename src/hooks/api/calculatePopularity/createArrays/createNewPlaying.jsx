const createNewPlaying = () => {
  const newPlaying = playing.map((plays) => ({
    id: plays.id,
    game_id: plays.game_id,
    value: Number(plays.value) * 0.3,
  }));
  return newPlaying;
};
export { createNewPlaying };
