# Input the cost of petrol per liter (or gallon)
cost_of_petrol = float(input("Enter the cost of petrol per liter (or gallon): ")

# Input the total distance of the journey in kilometers (or miles)
total_distance = float(input("Enter the total distance of the journey in kilometers (or miles): ")

# Input the fuel efficiency of your vehicle in liters per kilometer (or gallons per mile)
fuel_efficiency = float(input("Enter the fuel efficiency of your vehicle in liters per kilometer (or gallons per mile): ")

# Calculate the amount of petrol consumed
petrol_consumed = total_distance / fuel_efficiency

# Calculate the total cost of petrol for the journey
total_cost = petrol_consumed * cost_of_petrol

# Display the results
print(f"Petrol consumed for the journey: {petrol_consumed:.2f} liters (or gallons)")
print(f"Total cost of petrol for the journey: ${total_cost:.2f}")
