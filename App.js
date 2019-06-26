// READ INPUT TEXT FILE AND SPLIT IT INTO SEPERATE LINES //
const fs = require('fs');
let inputData = fs.readFileSync('input.txt').toString().split('\n');
let drivers = [];

class Driver {
  constructor(name, trips) {
    this.name = name;
    this.trips = trips || [];
  }
  addTrip(newTrip) {
    this.trips = [...this.trips, newTrip];
  };
};
