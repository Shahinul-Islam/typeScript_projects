interface IOrder {
    id: number;
    name: string;
    status: string;
}

type Pizza = {
    name: string;
    price: number;
}


const pizzas: Pizza[] = [
    { name: 'Margherita', price: 8.99 },
    { name: 'Pepperoni', price: 9.99 },
    { name: 'BBQ Chicken', price: 10.99 },
    { name: 'Hawaiian', price: 9.49 },
    { name: 'Veggie', price: 8.49 }
];


let cashInDrawer:number = 100;
const orderQueue: IOrder[] = [];
let orderId:number = 1;


// Function to add a new pizza to the menu
function addNewPizza(pizaObj:Pizza):Pizza[]{
    pizzas.push(pizaObj);
    return pizzas;
}

function placeOrder(pizzaName:string):IOrder | string{
    const pizza = pizzas.find(p=>p.name.toLowerCase() === pizzaName.toLowerCase());
    if(!pizza){
        return 'Pizza not found';
    }
    cashInDrawer = cashInDrawer + pizza.price;
    orderId++;
    const newOrder = {id:orderId,name:pizza.name, status:'ordered'};
    orderQueue.push(newOrder);
    
    return newOrder;
}

function completeOrder(id:number):string | IOrder{
    const order = orderQueue.find(o=>o.id === id);
    if(!order){
        return 'Order not found';
    }
    order.status = 'completed';
    return order;
}


addNewPizza({name:'Meat Lovers', price:11.99});
addNewPizza({name:'Cheese', price:7.99});
addNewPizza({name:'Supreme', price:12.99});

placeOrder('Meat Lovers');
completeOrder(1);

console.log("Pizzas: ", pizzas);
console.log("Cash in drawer: ", cashInDrawer);
console.log("Order queue: ", orderQueue);