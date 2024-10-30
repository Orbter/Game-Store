const getPlaying = () => {
  fetch('https://api.igdb.com/v4/popularity_primitives/', {
    method: 'POST', // specify the HTTP method as POST
    headers: {
      'Content-Type': 'application/json',
      'Client-id': '7rvl6idj5j6drhlekykk7upqetjxn3',
      Authorization: 'Bearer 88953782nzliahjn523x1ogya9ug74',
    },
    body: 'fields game_id, value;sort value desc;limit 100;where popularity_type = 3;', // convert data to JSON format for the body
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // parse JSON response into native JavaScript object
    })
    .then((data) => {
      console.log('Success Playing:', data); // handle the successful response data
    })
    .catch((error) => {
      console.error('Error:', error); // handle any errors that occurred
    });
};

export { getPlaying };
