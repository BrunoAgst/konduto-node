module.exports = class BusLeg{
    constructor(origin_city, destination_city, number_of_connections, Class, fare_basis, company){
        this.origin_city = origin_city;
        this.destination_city = destination_city;
        this.date = new Date();
        this.number_of_connections = number_of_connections;
        this.class = Class;
        this.fare_basis = fare_basis;
        this.company = company;
    }
}

