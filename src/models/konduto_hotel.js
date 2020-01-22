const Rooms = require('./konduto_hotel_rooms');

module.exports = class Hotel{
    constructor(name, address1, address2, city, country, state, zip, country, category){
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.category = category;
        this.rooms = new Rooms();
    }
}

