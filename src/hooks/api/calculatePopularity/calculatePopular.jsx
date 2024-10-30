import { createNewPlaying } from './createArrays/createNewPlaying';
import { createNewVisits } from './createArrays/createNewVisits';
import { createNewWant } from './createArrays/createNewWant';

function calculatePopular(visits, wantToPlay, playing) {
  const mergeList = (arrayVisits, arrayWantToPlay, arrayPlaying) => {
    const mainMap = new Map();
    const addOrUpdate = (array) => {
      array.forEach(({ id, game_id, value }) => {
        if (mainMap.has(game_id)) {
          mainMap.set(game_id, mainMap.get(game_id) + value);
        } else {
          mainMap.set(game_id, value);
        }
      });
    };
    addOrUpdate(arrayVisits);
    addOrUpdate(arrayWantToPlay);
    addOrUpdate(arrayPlaying);

    return Array.from(mainMap, ([game_id, value]) => ({ game_id, value }));
  };

  const newVisits = createNewVisits(visits);
  const newWant = createNewWant(wantToPlay);
  const newPlaying = createNewPlaying(playing);

  const popularList = mergeList(newVisits, newWant, newPlaying);
  popularList.sort((a, b) => b.value - a.value);
  return popularList;
}

export { calculatePopular };
