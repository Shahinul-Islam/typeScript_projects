
// const pizzas = [
//     { name: 'Margherita', price: 8.99 },
//     { name: 'Pepperoni', price: 9.99 },
//     { name: 'BBQ Chicken', price: 10.99 },
//     { name: 'Hawaiian', price: 9.49 },
//     { name: 'Veggie', price: 8.49 }
// ];


// const cashInDrawer = 100;
// const orderQueue = [];
// let orderId = 1;
// let count = 0;


// // Function to add a new pizza to the menu
// function addNewPizza(name, price){
//     pizzas.push({name, price});
//     return pizzas;
// }

// function placeOrder(pizzaName){
//     const pizza = pizzas.find(p=>p.name.toLowerCase() === pizzaName.toLowerCase());
//     if(!pizza){
//         return 'Pizza not found';
//     }
//     cashInDrawer = cashInDrawer + pizza.price;
//     orderId++;
//     const newOrder = {id:orderId,name:pizza.name, status:'ordered'};
//     orderQueue.push(newOrder);
    
//     return newOrder;
// }

// function completeOrder(id){
//     const order = orderQueue.find(o=>o.id === id);
//     if(!order){
//         return 'Order not found';
//     }
//     order.status = 'completed';
//     return order;
// }


// addNewPizza('Meat Lovers', 11.99);
// addNewPizza('Vegan', 10.99);
// addNewPizza('Cheese', 7.99);

// placeOrder('Meat Lovers');
// completeOrder("1");

// console.log("Pizzas: ", pizzas);
// console.log("Cash in drawer: ", cashInDrawer);
// console.log("Order queue: ", orderQueue);