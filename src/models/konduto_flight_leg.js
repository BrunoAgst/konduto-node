module.exports = class FlightLeg{
    constructor(origin_airport, origin_city, destination_airport, destination_city, number_of_connections, Class, fare_basis, company){
        this.origin_airport = origin_airport;
        this.origin_city = origin_city;
        this.destination_airport = destination_airport;
        this.destination_city = destination_city;
        this.date = new Date();
        this.number_of_connections = number_of_connections;
        this.class = Class;
        this.fare_basis = fare_basis;
        this.company = company;
    }
}