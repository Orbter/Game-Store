function addingClasses(allCategories, cssClasses) {
  const randomClasses = (array) => {
    let chooseClass = false;
    let color;
    let lastColor = null; // Move lastColor inside the function

    while (!chooseClass) {
      const randomNumber = Math.floor(Math.random() * array.length);
      if (array[randomNumber].counter > 0) {
        if (array[randomNumber].color !== lastColor) {
          array[randomNumber].counter -= 1;
          chooseClass = true;
          color = array[randomNumber].color;
          lastColor = color; // Update lastColor within the function
        }
      }

      // Additional check to prevent infinite loop
      const availableColors = array.filter(
        (item) => item.counter > 0 && item.color !== lastColor,
      );
      if (availableColors.length === 0) {
        // No other colors available; assign the same color
        array[randomNumber].counter -= 1;
        chooseClass = true;
        color = array[randomNumber].color;
        lastColor = color;
      }
    }
    return color;
  };

  const updatedCategories = allCategories.map((item) => ({
    ...item,
    randomClasses: randomClasses(cssClasses),
  }));
  return updatedCategories;
}

function changeColors(list) {
  const copyList = [...list];
  let lastColor = null;
  let colorNow = null;

  for (let index = 0; index < copyList.length; index++) {
    const element = copyList[index];
    colorNow = element.randomClasses;

    if (colorNow === lastColor) {
      let trueRandom = false;
      let randomNumber;

      while (!trueRandom) {
        randomNumber = Math.floor(Math.random() * copyList.length);
        const numberMinusOne = element.id - 1;

        if (randomNumber !== element.id && randomNumber !== numberMinusOne) {
          trueRandom = true;
        }
      }

      const colorProblem = colorNow;
      const colorSwitch = copyList[randomNumber].randomClasses;
      copyList[randomNumber].randomClasses = colorProblem;
      copyList[index].randomClasses = colorSwitch;
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
