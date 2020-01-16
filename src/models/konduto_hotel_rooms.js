class HotelRooms{
    constructor(number, code, type, check_in_date, check_out_date, board_basis, guests){
        this.number = number;
        this.code = code;
        this.type = type;
        this.check_in_date = check_in_date;
        this.check_out_date = check_out_date;
        this.board_basis = board_basis;
        this.guests = guests;
    }
}

module.exports = HotelRooms;