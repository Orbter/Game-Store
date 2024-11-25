function addingClasses(allCategories, cssClasses) {
  const checkingCounters = (thisCssClass) => {
    const copyCss = cssClasses;
    let doesHave2 = false;
    let classValid = true;
    for (let index = 0; index < 8; index++) {
      const element = copyCss[index];
      if (element.counter === 2) doesHave2 = true;
    }
    if (doesHave2) {
      if (thisCssClass.counter !== 2) classValid = false;
    }

    return classValid;
  };

  const cssClassesCurrent = cssClasses;
  const randomClasses = (array) => {
    let chooseClass = false;
    let color;
    while (!chooseClass) {
      const randomNumber = Math.floor(Math.random() * array.length);
      const doesHave2 = checkingCounters(array[randomNumber]);

      if (array[randomNumber].counter !== 0 && doesHave2) {
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
    list = new Set();
    newAllCategories.length === 4 && (listOver = true);
  }
  return newAllCategories;
}

export { addingClasses, randomSlider };

//
