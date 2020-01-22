module.exports = class Item{
    constructor(sku, category, name, description, product_code, unit_cost, quantity, discount, date){
        this.sku = sku;
        this.category = category;
        this.name = name;
        this.description = description;
        this.product_code = product_code;
        this.unit_cost = unit_cost;
        this.quantity = quantity;
        this.discount = discount;
        this.created_at = date;
    }
}

