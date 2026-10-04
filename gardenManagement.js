const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// 1. Check if temperature is greater than 80
if (temperature > 80) {
  console.log("Watering on");
}

// 2. Check the time of day and log "Lights off"
if (timeOfDay === "morning") {
  console.log("Lights off");
}

// 3. Increment soilMoisture to 40 using a while loop
while (soilMoisture < 40) {
  soilMoisture++;
}

// 4. Log the final value of soilMoisture to pass the last test
console.log(soilMoisture);

// 5. Use if-else statements to check the temperature and log the appropriate message
if (temperature > 80) {
  console.log("Temperature is > 80, watering on.");
} else {
  console.log("Temperature is not > 80, watering off.");
}
// 6. Use if-else statements to check the time of day and log the appropriate message
if (timeOfDay === "evening") {
  console.log("Time of day is evening, lights on.");
} else {
  console.log("Time of day is not evening, lights off.");
}
// 7. Use a while loop to increment the value of soilMoisture by 5 until it reaches 40.
while (soilMoisture < 40) {
  soilMoisture += 5;
}
console.log(soilMoisture);
