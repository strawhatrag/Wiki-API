const url =
  "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6";

async function getData() {
  const request = new Request(url, {
    headers: {
      Authorization: "Bearer 12",
    },
  });
  const response = fetch(request);

  //const data = await response.json(); // cus .json is a promise
  console.log(response);
}

getData();
