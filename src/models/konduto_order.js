const Customer = require('./konduto_customer');

class Order{
	constructor(id, visitor, total_amount, shipping_amount, tax_amount, currency, installments, ip, first_message, messages_exchanged, purchased_at, analyze, payment, billing, shipping, shopping_cart, hotel, travel, seller){
		this.id = id;
		this.visitor = visitor;
	    this.total_amount = total_amount;
	  	this.shipping_amount = shipping_amount;
	    this.tax_amount = tax_amount;
	    this.currency = currency;
	    this.installments = installments; 
	    this.ip = ip;
	    this.first_message = first_message;
	    this.messages_exchanged = messages_exchanged;
	    this.purchased_at = purchased_at;
	    this.analyze = analyze;
	    this.customer = new Customer();
	    this.payment = payment;
	    this.billing = billing;
	    this.shipping = shipping;
		this.shopping_cart = shopping_cart;
		this.hotel = hotel;
	    this.travel = travel;
	    this.seller = seller;	
	}
}

module.exports = Order;