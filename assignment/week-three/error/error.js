const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = parseFloat(item.price);
    if (isNaN(price)) {
      console.log("Invalid price.");
      return;
    }
    this.items.push({ ...item, price }); 
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};


checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
checkout.addItem({ name: "Milk", price: 3.5 });              

console.log(checkout.getTotal()); 
