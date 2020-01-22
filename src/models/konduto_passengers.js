const Loyalty = require('./konduto_loyalty');

module.exports = class Passengers{
    constructor(name, document, document_type, nationality, frequent_traveler, special_needs){
        this.name = name;
        this.document = document;
        this.document_type = document_type;
        this.nationality = nationality;
        this.loyalty = new Loyalty();
        this.frequent_traveler = frequent_traveler;
        this.special_needs = special_needs;
    }
}