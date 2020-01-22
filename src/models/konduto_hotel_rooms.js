const Guests = require('./konduto_hotel_rooms_guest');

module.exports = class HotelRooms{
    constructor(number, code, type, check_in_date, check_out_date, board_basis){
        this.number = number;
        this.code = code;
        this.type = type;
        this.check_in_date = check_in_date;
        this.check_out_date = check_out_date;
        this.board_basis = board_basis;
        this.guests = new Guests();
    }
}
