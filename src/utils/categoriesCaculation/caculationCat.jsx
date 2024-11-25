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

function changeColors(list) {
  const copyList = [...list];
  let lastColor = null;
  let colorNow = null;
  let trueRandom = false;
  let colorProblem;
  let colorSwitch;
  for (let index = 0; index < copyList.length; index++) {
    const element = copyList[index];
    colorNow = element.randomClasses;
    if (colorNow === lastColor) {
      let randomNumber;
      while (!trueRandom) {
        randomNumber = Math.floor(Math.random() * copyList.length);
        if (randomNumber !== element.id || randomNumber !== element.id - 1) {
          trueRandom = true;
        }
      }
      colorProblem = colorNow;
      colorSwitch = copyList[randomNumber].randomClasses;
      copyList[randomNumber].randomClasses = colorProblem;
      copyList[element.id].randomClasses = colorSwitch;
    }
    lastColor = colorNow;
  }
  return copyList;
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
    list = new Set();
    newAllCategories.length === 4 && (listOver = true);
  }
  return newAllCategories;
}

export { addingClasses, randomSlider, changeColors };

//
