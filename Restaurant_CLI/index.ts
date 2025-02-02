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


let nextPizzaId:number  = 1;
let cashInDrawer:number = 100;
let orderId:number = 1;
const orderQueue: Order[] = [];

const pizzas: Pizza[] = [
    { id:nextPizzaId++, name: 'Margherita', price: 8.99 },
    { id:nextPizzaId++, name: 'Pepperoni', price: 9.99 },
    { id:nextPizzaId++, name: 'BBQ Chicken', price: 10.99 },
    { id:nextPizzaId++, name: 'Hawaiian', price: 9.49 },
    { id:nextPizzaId++, name: 'Veggie', price: 8.49 }
];



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
    // pizaObj.id = nextPizzaId++;
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


const pizzaObj = {id:nextPizzaId++,name:'Meat Lovers 4', price:11.99};
addNewPizza(pizzaObj);

// addNewPizza();
addNewPizza({id:nextPizzaId++,name:'Cheese', price:7.99});
addNewPizza({id:nextPizzaId++,name:'Supreme', price:12.99});

completeOrder(1);
placeOrder('Meat Lovers');

console.log("Pizzas: ", pizzas)
console.log("Order queue: ", orderQueue);
console.log("Cash in drawer: ", cashInDrawer);
console.log("Pizza Details: ", getPizzaDetail('veggie'));