class TravelInfo{
    constructor(date, number_of_connections, Class, fare_basis, company){
        this.date = date;
        this.number_of_connections = number_of_connections;
        this.class = Class;
        this.fare_basis = fare_basis;
        this.company = company;
    }
}

module.exports = TravelInfo;