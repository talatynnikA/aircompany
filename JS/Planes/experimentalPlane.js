const Plane = require('./Plane');

class experimentalPlane   extends Plane
{

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.PlaneModel = model;
        this.PlaneMaxSpeed = maxSpeed;
        this.PlaneMaxFlightDistance = maxFlightDistance;
        this.PlaneMaxLoadCapacity = maxLoadCapacity;
        this.PlaneType = type;
        this.PlaneClassificationLevel = classificationLevel;

    }


    get model()
    {
        return this.PlaneModel;
    }

    set model(value) {
        this.PlaneModel = value;
    }

    get maxSpeed() {
        return this.PlaneMaxSpeed;
    }

    set maxSpeed(value) {
        this.PlaneMaxSpeed = value;
    }

    get maxFlightDistance() {
        return this.PlaneMaxFlightDistance;
    }

    set maxFlightDistance(value) {
        this.PlaneMaxFlightDistance = value;
    }

    get maxLoadCapacity() {
        return this.PlaneMaxLoadCapacity;
    }

    set maxLoadCapacity(value) {
        this.PlaneMaxLoadCapacity = value;
    }

    get type() {
        return this.PlaneType;
    }

    set type(value) {
        this.PlaneType = value;
    }

    get classificationLevel() {
        return this.PlaneClassificationLevel;
    }

    set classificationLevel(value) {
        this.PlaneClassificationLevel = value;
    }
}

module.exports = experimentalPlane