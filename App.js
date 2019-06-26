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

// CHECK TO SEE IF CREATING NEW DRIVER OR NEW TRIP //
const checkData = (dataArray) => {
  for(let i = 0; i < dataArray.length; i++) {
    if(dataArray[i][0] === 'Driver') {
      createDriver(dataArray[i][1]);
    } else if (dataArray[i][0] === 'Trip') {
      createTrip(dataArray[i]);
    };
  };
  console.log(drivers[0].trips);
};

// CREATE NEW DRIVER AND PUSH INTO DRIVERS ARRAY //
const createDriver = (name) => {
  const driver = new Driver(name);
  drivers.push(driver);
};

const createTrip = (tripData) => {
  let driverName = tripData[1];
  let startTime = tripData[2];
  let endTime = tripData[3];
  let milesDriven = tripData[4];
  let start = startTime.split(':');
  let end = endTime.split(':');
  let totalHours = (((end[0] * 60) + end[1]) - ((start[0] * 60) + start[1])) / 60;
  let mph = milesDriven / totalHours;
  if(mph > 5 && mph < 100) {
    let thisDriver = drivers.find(person => person.name === driverName);
    thisDriver.addTrip({
      startTime: startTime,
      endTime: endTime,
      milesDriven: milesDriven,
      totalHours: totalHours
    });
  };
};

separateData(inputData);
