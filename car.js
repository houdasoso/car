// Step 2: Now we create a class called Car that follows the Vehicle interface
var Car = /** @class */ (function () {
    // The constructor sets up the car with its make, model, and year
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // This method is required by the interface
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Step 3: Let's create a car object and try it out
var myCar = new Car("Honda", "Civic", 2022);
// Start the car to see the message
myCar.start(); // Output: Car engine started
