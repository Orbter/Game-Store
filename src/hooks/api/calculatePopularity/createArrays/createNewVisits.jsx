const createNewVisits = (visits) => {
  const newVisits = visits.map((visit) => ({
    id: visit.id,
    game_id: visit.game_id,
    value: Number(visit.value) * 0.4,
  }));
  return newVisits;
};
export { createNewVisits };
