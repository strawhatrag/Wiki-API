const url = "http://worldtimeapi.org/api/timezone/America/New_York";

async function getData() {
  const response = await fetch(url);
  const data = await response.json(); // cus .json is a promise
  console.log(data);
}

getData();
