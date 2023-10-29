const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the cost of petrol per liter (or gallon): ", function(cost_of_petrol) {
  rl.question("Enter the total distance of the journey in kilometers (or miles): ", function(total_distance) {
    rl.question("Enter the fuel efficiency of your vehicle in liters per kilometer (or gallons per mile): ", function(fuel_efficiency) {
      cost_of_petrol = parseFloat(cost_of_petrol);
      total_distance = parseFloat(total_distance);
      fuel_efficiency = parseFloat(fuel_efficiency);

      // Calculate the amount of petrol consumed
      const petrol_consumed = total_distance / fuel_efficiency;

      // Calculate the total cost of petrol for the journey
      const total_cost = petrol_consumed * cost_of_petrol;

      // Display the results
      console.log(`Petrol consumed for the journey: ${petrol_consumed.toFixed(2)} liters (or gallons)`);
      console.log(`Total cost of petrol for the journey: $${total_cost.toFixed(2)}`);

      rl.close();
    });
  });
});
