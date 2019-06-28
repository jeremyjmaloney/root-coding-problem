# root-coding-problem

## Problem Statement
1. Read in external input.txt file
2. Given the commands in the txt file, the app must either create a new driver, or create a new trip that belongs to a driver.
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
