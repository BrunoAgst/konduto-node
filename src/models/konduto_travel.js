const FlightLeg = require('./konduto_flight_leg');
const BusLeg = require('./konduto_bus_leg');
const Passangers = require('./konduto_passengers')

module.exports = class Travel{
    constructor(type, expiration_date, departure, Return){
        this.type = type;
        this.expiration_date = expiration_date;
        this.departure = departure // FlightLeg or BusLeg
        this.return = Return; //FlightLeg or BusLeg
        this.passengers = new Passangers();
   }
}

