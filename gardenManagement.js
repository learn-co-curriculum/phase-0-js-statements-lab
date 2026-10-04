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