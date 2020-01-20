class Blacklist{
    constructor(email_address, days_to_expire){
      this.email_address = email_address;
      this.days_to_expire = days_to_expire;
    }

}

module.exports = Blacklist;