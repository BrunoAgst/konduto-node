module.exports = class Payment{
    constructor(type, bin, last4, expiration_date, status, amount, description){
        this.type = type;
        this.bin = bin;
        this.last4 = last4;
        this.expiration_date = expiration_date;
        this.status = status;
        this.amount = amount;
        this.description = description;
    }
}