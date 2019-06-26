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

// SEPARATE THE WORDS IN EACH LINE OF DATA //
const separateData = (data) => {
  let dataArray = [];
  for(let i = 0; i < data.length; i++) {
    let line = data[i].split(' ');
    dataArray.push(line);
  };
  checkData(dataArray);
};

const checkData = (dataArray) => {
  for(let i = 0; i < dataArray.length; i++) {
    if(dataArray[i][0] === 'Driver') {
      createDriver(dataArray[i][1]);
    } else if (dataArray[i][0] === 'Trip') {
      createTrip(dataArray[i]);
    };
  };
};

separateData(inputData);
