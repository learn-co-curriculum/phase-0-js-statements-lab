const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


// DIRECTIONS for Watering Control:
//Use an if-else statement to check the temperature.
//If the temperature is greater than 80, console log "Watering on".
//Otherwise, console log "Watering off".
if (temperature > 80){
    console.log("Watering on")
}
else {console.log("Watering off")};

// DIRECTIONS for Garden Lights Control:
//Use an if-else statement to check timeOfDay.
//If timeOfDay is "evening" or "night", console log "Lights on".
//Otherwise, console log "Lights off".
if (timeOfDay == "evening" || timeOfDay == "night"){
    console.log("Lights on")
}
else {console.log("Lights off")}

// DIRECTIONS for Soil Moisture Adjustment:
//Use a while loop to increment the value of soilMoisture by 5 until it reaches 40.
//Console log the value of soilMoisture at each step. When it reaches 40, console log 40.
while (soilMoisture < 40){
    soilMoisture += 5;
    console.log(soilMoisture)
}