function addingClasses(allCategories, cssClasses) {
  const cssClassesCurrent = cssClasses;
  const randomClasses = (array) => {
    let chooseClass = false;
    while (!chooseClass) {
      const randomNumber = Math.floor(Math.random() * 7);
      if (array[randomNumber].counter !== 0) {
        array[randomNumber].counter -= 1;
        chooseClass = true;
      }
      return array[randomNumber].color;
    }
  };
  allCategories.map((item) => ({
    ...item,
    randomNumber: randomClasses(cssClassesCurrent),
  }));
}
// randomize the sliders so that every time it will have 4 different card every time tou open the website

function randomSlider(allCategories) {
  let listOver = false;
  const newAllCategories = [];
  while (!listOver) {
    let list = new Set();
    while (list.size < 4) {
      const randomNumber = Math.floor(Math.random() * allCategories.length);
      list.add(allCategories[randomNumber]);
    }
    newAllCategories.push([...list]);
    list = new Set();
    newAllCategories.length === 3 && (listOver = true);
  }
  return newAllCategories;
}

export { addingClasses, randomSlider };
