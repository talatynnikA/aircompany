const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {

    getPassengerPlanes() {
        let planes = this.planes;
        let PassengerPlanes = [];
        for (let p of planes) {
            if (p instanceof PassengerPlane) {PassengerPlanes.push(p);}
        }
        return PassengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
            else{}
        });
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() >     planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }


    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() == MilitaryType.TYPE_TRANSPORT) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType()=== MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }


    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof experimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        return experimentalPlanes;
    }



    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.GetMaxFlightDistance() > b.GetMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    /**
     * Sorts by max speed
     * @return Airport
     */
    sortByMaxSpeed() {
        return this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
    }

    sortByMaxLoadCapacity() {
        return this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
