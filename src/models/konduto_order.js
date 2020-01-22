const Customer = require('./konduto_customer');
const Payment = require('./konduto_payment');
const Address = require('./konduto_address');
const Shopping_cart = require('./konduto_item');
const Hotel = require('./konduto_hotel');
const Travel = require('./konduto_travel');
const Seller = require('./konduto_seller');

class Order{
	constructor(id, visitor, total_amount, shipping_amount, tax_amount, currency, installments, ip, first_message, messages_exchanged, purchased_at, analyze){
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
	    this.payment = new Payment();
	    this.billing = new Address();
	    this.shipping = new Address();
		this.shopping_cart = new Shopping_cart();
		this.hotel = new Hotel();
	    this.travel = new Travel();
	    this.seller = new Seller();	
	}
}

module.exports = Order;