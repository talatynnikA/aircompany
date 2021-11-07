const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.PassengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this.PassengersCapacity;
    }
}

module.exports = PassengerPlane;