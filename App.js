// READ INPUT TEXT FILE AND SPLIT IT INTO SEPERATE LINES //
const fs = require('fs');
let inputData = fs.readFileSync('input.txt').toString().split('\n');
let drivers = [];

// DRIVER CLASS WITH ATTRIBUTES FOR NAME, TRIPS, TOTAL MILES AND HOURS //
class Driver {
  constructor(name, trips, miles, hours) {
    this.name = name;
    this.trips = trips || [];
    this.totalMiles = miles || 0;
    this.totalHours = hours || 0;
  };
  addTrip(newTrip) {
    this.trips = [...this.trips, newTrip];
  };
  addMilesAndHours(miles, hours) {
    this.totalMiles = this.totalMiles + miles;
    this.totalHours = this.totalHours + hours;
  }
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
};

// CREATE NEW DRIVER AND PUSH INTO DRIVERS ARRAY //
const createDriver = (name) => {
  drivers.push(new Driver(name));
};

// ADD A NEW TRIP TO EXISTING DRIVER OBJECT //
const createTrip = (tripData) => {
  // SET VARIABLES FROM TRIPDATA //
  let driverName = tripData[1];
  let startTime = tripData[2];
  let endTime = tripData[3];
  let tripMiles = parseFloat(tripData[4]);
  let start = startTime.split(':');
  let end = endTime.split(':');
  let tripHours = (((parseFloat(end[0]) * 60) + parseFloat(end[1])) - ((parseFloat(start[0]) * 60) + parseFloat(start[1]))) / 60;
  let mph = tripMiles / tripHours;

  // FIND THE CORRECT DRIVER TO ADD TRIP TO //
  let person = drivers.find(person => person.name === driverName);
  let index = drivers.indexOf(person);

  // ONLY ADD VALID TRIPS //
  if(mph > 5 && mph < 100) {
    drivers[index].addTrip({
      startTime: startTime,
      endTime: endTime,
      tripMiles: tripMiles,
      tripHours: tripHours
    });
    drivers[index].addMilesAndHours(tripMiles, tripHours);
  };
};

// SORT BY TOTAL MILES, ROUND MILES AND HOURS, PRINT EACH ENTRY //
const printReport = () => {
  // SORT BY TOTAL MILES //
  let reportEntries = drivers.slice();
  reportEntries.sort((driver1, driver2) => (driver1.totalMiles < driver2.totalMiles) ? 1 : -1);

  // ROUND MILES AND HOURS AND PRINT EACH DRIVERS DETAILS //
  for(let i = 0; i < reportEntries.length; i++){
    if(reportEntries[i].totalMiles > 0) {
      let amph = Math.round(reportEntries[i].totalMiles / reportEntries[i].totalHours);
      let totalMiles = Math.round(reportEntries[i].totalMiles);
      console.log(`${reportEntries[i].name}: ${totalMiles} miles @ ${amph} mph`);
    } else {
      console.log(`${reportEntries[i].name}: ${reportEntries[i].totalMiles} miles`);
    }
  };
};

// RUN THE APPLICATION //
separateData(inputData);
printReport();
