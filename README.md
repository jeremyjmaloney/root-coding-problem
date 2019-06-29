# root-coding-problem

## How To Run The Application

Using command line, navigate to the directory that has the App.js file, and the input.txt file. In the command line type:
```
node App.js
```

## Problem Statement

1. Read in external input.txt file.
2. Given the commands in the txt file, the app must either create a new. driver, or create a new trip that belongs to a driver.
3. Discard any trips that average a speed of less than 5 mph or greater than 100 mph.
4. Generate a report containing each driver with total miles driven and average speed. Sort the output by most miles driven to least. Round miles and miles per hour to the nearest integer.
Example input:

```
Driver Dan
Driver Alex
Driver Bob
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Alex 12:01 13:16 42.0
```

Expected output:

```
Alex: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Bob: 0 miles
```

## Technologies Used

* JavaScript
* NodeJS
### I chose to solve this problem with JavaScript because:
1. It is the language that I'm most familiar with.
2. I like the built in JavaScript array methods.
3. I like the JavaScript classes and class functions.
4. JavaScript is used everywhere and I think it's good to demonstrate my knowledge of the language.

## Solving Approach

### Step 1: Reading the input.txt file
Using NodeJS readFileSync to read the file, make it into a string, and separate it into different lines.
### Step 2: Separate each line into separate words
Separate each word in each line, and push each separated line into an array, and pass it to be checked.
### Step 3: Checking the data
If the first word in the line is Driver, we want to make a new driver object
If the first word in the line is Trip, we want to log a new trip for that driver.
### Step 4: Create a driver
Using the JavaScript class, this creates a new driver that can have a name, an array of trips, total number of miles driven, and total hours of drive time.
Push the new driver created into and array of drivers.
### Step 5: Create a trip
Given the line of trip data, set variables for name, start time, end time, and trip miles.
Split the start time and end time to separate hours and minutes. Multiply hours by 60 and add the minutes to get a total number of minutes. Subtract start minutes from end minutes to get total amount of minutes, and divide by 60 to get total amount of hours.
Get the miles per hour by dividing the miles by the hours.
Find the driver in the drivers array that the trip belongs to, and if the trip is a valid trip, use the Driver class function to add the trip to that specific driver.
Add miles and hours to the drivers total miles and total hours using the Driver class function.
### Step 6: Print out the data
Make a copy of the drivers array and sort it based on the total miles driven by each driver in descending order.
For each driver, get the average miles per hour and round it, and round the total number of miles driven.
If a driver has more than 0 miles, print out a full statement with the drivers name, total miles traveled, and average miles per hour.
If a driver has zero miles, only print out the driver name and 0 miles.
