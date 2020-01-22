const FlightLeg = require('./konduto_flight_leg');
const BusLeg = require('./konduto_bus_leg');
const Passangers = require('./konduto_passengers')

module.exports = class Travel{
    constructor(type, expiration_date){
        this.type = type;
        this.expiration_date = expiration_date;
        this.departure = new FlightLeg(); //or BusLeg
        this.return = new FlightLeg(); //or BusLeg
        this.passengers = new Passangers();
   }
}

