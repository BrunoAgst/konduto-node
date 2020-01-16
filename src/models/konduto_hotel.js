class Hotel{
    constructor(name, address1, address2, city, country, state, zip, country, category, rooms){
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.category = category;
        this.rooms = rooms;
    }
}

module.exports = Hotel;