// Step 1: Let's create an interface that describes a Vehicle
interface Vehicle {
  make: string;          // The brand of the car, like Toyota or Honda
  model: string;         // The model name, like Corolla or Civic
  year: number;          // The year it was made
  start(): void;         // A function that starts the engine
}

// Step 2: Now we create a class called Car that follows the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // The constructor sets up the car with its make, model, and year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // This method is required by the interface
  start(): void {
    console.log("Car engine started");
  }
}

// Step 3: Let's create a car object and try it out
const myCar = new Car("Honda", "Civic", 2022);

// Start the car to see the message
myCar.start();  // Output: Car engine started
