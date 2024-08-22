const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
const gardenTasks = ["Water plants", "Trim hedges", "Mow lawn"];

if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}


if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

while (soilMoisture <= 40) {
  soilMoisture += 5;
    console.log(soilMoisture);
}

for (let i = 0; i < gardenTasks.length; i++) {
  console.log(gardenTasks[i]);
}
