
type Adress = {
    street: string;
    city: string;
    country: string;
}


type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address:Adress;
}


let person:Person = {
    name: 'John',
    age: 30,
    isStudent: false,
    address:{
        street:'123 Main St',
        city:'New York',
        country:'USA'
    }
}

let person2:Person = {
    name: 'Jane',
    age: 25,
    isStudent: true,
    address:{
        street:'456 Elm St',
        city:'Los Angeles',
        country:'USA'
    }
}


let myName = 'John';

const myName2 = 'Jane';

type UserRole = 'guest' | 'admin' | 'member';

type User = {
    name: string;
    role: UserRole;
}

let user:User = {
    name: 'John',
    role: 'admin'
}

