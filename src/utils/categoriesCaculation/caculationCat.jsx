function addingClasses(allCategories, cssClasses) {
  const cssClassesCurrent = cssClasses;
  const randomClasses = (array) => {
    let chooseClass = false;
    let color;
    while (!chooseClass) {
      const randomNumber = Math.floor(Math.random() * array.length);
      if (array[randomNumber].counter !== 0) {
        array[randomNumber].counter -= 1;
        chooseClass = true;
        color = array[randomNumber].color;
      }
    }
    return color;
  };
  const updatedCategories = allCategories.map((item) => ({
    ...item,
    randomClasses: randomClasses(cssClassesCurrent),
  }));
  return updatedCategories;
}
// randomize the sliders so that every time it will have 4 different card every time tou open the website

function randomSlider(allCategories) {
  let listOver = false;
  const copyAllCategories = [...allCategories];
  const newAllCategories = [];
  while (!listOver) {
    let list = new Set();
    while (list.size < 4) {
      const randomNumber = Math.floor(Math.random() * copyAllCategories.length);
      let number;
      if (randomNumber === copyAllCategories.length) {
        copyAllCategories.pop();
      } else {
        number = copyAllCategories.splice(randomNumber, 1);
      }
      const removeItem = number.pop();
      list.add(removeItem);
    }
    newAllCategories.push([...list]);
    console.log(newAllCategories);
    list = new Set();
    newAllCategories.length === 3 && (listOver = true);
  }
  return newAllCategories;
}

export { addingClasses, randomSlider };

//
