type OrderStatus = 'ordered' | 'preparing' | 'completed';

type Identifier = number | string;

type Order = {
    id: number;
    name: string;
    status: OrderStatus;
}

type Pizza = {
    id: number;
    name: string;
    price: number;
}


const pizzas: Pizza[] = [
    { id:1, name: 'Margherita', price: 8.99 },
    { id:2, name: 'Pepperoni', price: 9.99 },
    { id:3, name: 'BBQ Chicken', price: 10.99 },
    { id:4, name: 'Hawaiian', price: 9.49 },
    { id:5, name: 'Veggie', price: 8.49 }
];


let cashInDrawer:number = 100;
let orderId:number = 1;
const orderQueue: Order[] = [];

//Function to get Pizza details
function getPizzaDetail(identifier:Identifier):Pizza | string{
    if(typeof identifier === 'number'){
       const pizza = pizzas.find(p=>p.id === identifier);
       if(!pizza){
           return 'Pizza not found';
       }
         return pizza;
    }else{
        const pizza = pizzas.find(p=>p.name.toLowerCase() === identifier.toLowerCase());
        if(!pizza){
            return 'Pizza not found';
        }
        return pizza;
    }
    
}


// Function to add a new pizza to the menu
function addNewPizza(pizaObj:Pizza):Pizza[]{
    pizzas.push(pizaObj);
    return pizzas;
}

function placeOrder(pizzaName:string):Order | string{
    const pizza = pizzas.find(p=>p.name.toLowerCase() === pizzaName.toLowerCase());
    if(!pizza){
        return 'Pizza not found';
    }
    cashInDrawer = cashInDrawer + pizza.price;
    orderId++;
    const newOrder:Order = {id:orderId,name:pizza.name, status:'ordered'};
    orderQueue.push(newOrder);
    
    return newOrder;
}

function completeOrder(id:number):string | Order{
    const order = orderQueue.find(o=>o.id === id);
    if(!order){
        return 'Order not found';
    }
    order.status = 'completed';
    return order;
}


const pizzaObj = {id:6,name:'Meat Lovers 2', price:11.99};
addNewPizza(pizzaObj);

// addNewPizza();
addNewPizza({id:7,name:'Cheese', price:7.99});
addNewPizza({id:8,name:'Supreme', price:12.99});

completeOrder(1);
placeOrder('Meat Lovers');

console.log("Pizzas: ", pizzas)
console.log("Order queue: ", orderQueue);
console.log("Cash in drawer: ", cashInDrawer);
console.log("Pizza Details: ", getPizzaDetail('veggie'));