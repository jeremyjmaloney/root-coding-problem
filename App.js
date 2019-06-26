// READ INPUT TEXT FILE AND SPLIT IT INTO SEPERATE LINES //
const fs = require('fs');
let inputData = fs.readFileSync('input.txt').toString().split('\n');
let drivers = [];

// CREATE THE DRIVER CLASS WITH ATTRIBUTES FOR NAME AND ARRAY OF TRIPS //
class Driver {
  constructor(name, trips) {
    this.name = name;
    this.trips = trips || [];
  };
  addTrip(newTrip) {
    this.trips = [...this.trips, newTrip];
  };
};

const separateData = (data) => {
  let dataArray = [];
  for(let i = 0; i < data.length; i++) {
    let line = data[i].split(' ');
    dataArray.push(line);
  };
  console.log(dataArray);
  // checkData(dataArray);
};

separateData(inputData);
