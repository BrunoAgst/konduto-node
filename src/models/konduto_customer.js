class Customer{
	constructor(id, name, tax_id, dob, phone1, phone2, email, created_at, New, vip){
		this.id = id;
		this.name = name;
		this.tax_id = tax_id;
		this.dob = dob;
		this.phone1 = phone1;
		this.phone2 = phone2;
		this.email = email;
		this.created_at = created_at;
		this.new = New;
		this.vip = vip;
	}
}

module.exports = Customer;