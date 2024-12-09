function giveGameInformation(gamesArray) {
  const informationArray = [];
  gamesArray.map((game, index) => {
    const obj = {
      gameName: game.name,
      imgUrl: game.background_image,
      screenShot: game.short_screenshots[0],
      price: priceAPi(),
    };
  });
}
