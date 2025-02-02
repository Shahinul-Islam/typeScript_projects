"use strict";
let nextPizzaId = 1;
let cashInDrawer = 100;
let orderId = 1;
const orderQueue = [];
const pizzas = [
    { id: nextPizzaId++, name: 'Margherita', price: 8.99 },
    { id: nextPizzaId++, name: 'Pepperoni', price: 9.99 },
    { id: nextPizzaId++, name: 'BBQ Chicken', price: 10.99 },
    { id: nextPizzaId++, name: 'Hawaiian', price: 9.49 },
    { id: nextPizzaId++, name: 'Veggie', price: 8.49 }
];
//Function to get Pizza details
function getPizzaDetail(identifier) {
    if (typeof identifier === 'number') {
        const pizza = pizzas.find(p => p.id === identifier);
        if (!pizza) {
            return 'Pizza not found';
        }
        return pizza;
    }
    else {
        const pizza = pizzas.find(p => p.name.toLowerCase() === identifier.toLowerCase());
        if (!pizza) {
            return 'Pizza not found';
        }
        return pizza;
    }
}
// Function to add a new pizza to the menu
function addNewPizza(pizaObj) {
    const newPizza = Object.assign(Object.assign({}, pizaObj), { id: nextPizzaId++ });
    pizzas.push(newPizza);
    return pizzas;
}
function placeOrder(pizzaName) {
    const pizza = pizzas.find(p => p.name.toLowerCase() === pizzaName.toLowerCase());
    if (!pizza) {
        return 'Pizza not found';
    }
    cashInDrawer = cashInDrawer + pizza.price;
    orderId++;
    const newOrder = { id: orderId, name: pizza.name, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(id) {
    const order = orderQueue.find(o => o.id === id);
    if (!order) {
        return 'Order not found';
    }
    order.status = 'completed';
    return order;
}
const pizzaObj = { name: 'Meat Lovers 4', price: 11.99 };
addNewPizza(pizzaObj);
// addNewPizza();
addNewPizza({ name: 'Cheese', price: 7.99 });
addNewPizza({ name: 'Supreme', price: 12.99 });
completeOrder(1);
placeOrder('Meat Lovers');
console.log("Pizzas: ", pizzas);
console.log("Order queue: ", orderQueue);
console.log("Cash in drawer: ", cashInDrawer);
console.log("Pizza Details: ", getPizzaDetail('veggie'));
