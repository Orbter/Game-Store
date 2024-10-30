const createNewWant = () => {
  const newWant = wantToPlay.map((want) => ({
    id: want.id,
    game_id: want.game_id,
    value: Number(want.value) * 0.3,
  }));
  return newWant;
};
export { createNewWant };
