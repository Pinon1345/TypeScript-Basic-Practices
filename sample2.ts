
type NewUser = {
    name: string,
    age: number,
}

type Role = {
    role: "admin" | "user" | "super-admin",
}

type NewUserWithRole = NewUser & Role;

// const newUser1: NewUserWithRole = {
//     name: "Fourkan Bin Ilias",
//     age: 24,
//     role: "admin",
// }


interface INewUser {
    name: string,
    age: number,
}

interface IUserRole extends INewUser {
    role: "admin" | "user" | "super-admin",
}


// console.log("Interface New User Info: ", newUser1);

type IsBoolean = boolean;

const isAdmin: IsBoolean = false;
const isEmployee: IsBoolean = true;




interface IFriends {
    [index: number]: string;
}


// console.log("Friends List: ", friends);

type NumberAdded = (num1: number, num2: number) => number;

const addNumbers: NumberAdded = (num1, num2) => {
    return num1 + num2;
};
console.log("Sum of 5 and 10: ", addNumbers(5, 10));

// Type Guard, Type Assertion, Type Casting

let anything: any;

anything = "Fourkan Bin Ilias";
anything = true;
anything = 24;

// (anything as number).

const calculateDeliveryFee = (distance: string | number | null) => {

    if (typeof distance === "number") {
        return distance * 20;
    }
    else if (typeof distance === "string") {
        const distanceInNumber = distance.split(" ")[0];
        return parseInt(distanceInNumber) * 20;
    }
    else {
        return 0;
    }
}

const result1 = calculateDeliveryFee('5 km');
const result2 = calculateDeliveryFee(5);
const result3 = calculateDeliveryFee(null);


// const friends: string[] = ["Anabiya", "Anaiya", "Malaika", "Fahim", "Muntaha", "Mumtahina", "Farha"];
// const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isEligible: boolean[] = [true, true, false, true, false, true, false, true, false, true];


// Generic

type GenArray<T> = Array<T>;


const friends: GenArray<string> = ["Anabiya", "Anaiya", "Malaika", "Fahim", "Muntaha", "Mumtahina", "Farha"];
const rollNumbers: GenArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEligible: GenArray<boolean> = [true, true, false, true, false, true, false, true, false, true];

const addCustomerToOrder = <T extends { id: number; name: string }>(customerInfo: T) => {
    return {
        orderStatus: "pending",
        ...customerInfo,
    }
}

const customer1 = {
    id: 123,
    name: "Ashraful",
    hasCoupon: true,
}

type CommonCustomerProperties = {
    id: number;
    name: string;
    hasCoupon: boolean
}

const result = addCustomerToOrder<CommonCustomerProperties>(customer1);

const resultSecond = addCustomerToOrder<CommonCustomerProperties & { moneyBag: number }>({
    id: 456,
    name: "Ehsanul Tayef",
    hasCoupon: false,
    moneyBag: 20000,
})

const resultThird = addCustomerToOrder<{ id: number; name: string; emni: string }>({ id: 483, name: "Fourkan Bin Ilias", emni: 'emni' });

console.log(result);

type FoodMenu = {
    Burger: string,
    Pizza: string,
    Sandwich: string,
    Pasta: string,
    MuttonBiriani: string,
}



const myFrvtFood: keyof FoodMenu = "Burger";


const newUser1: IUserRole = {
    name: "Fourkan Bin Ilias",
    age: 24,
    role: "admin",
}

const product = {
    brand: "Apple",
    model: "iPhone 14 Pro Max",
    price: 150000,
    color: "Space Black",
}

const myName = newUser1['name']


const getPropertyFromObject = (obj: { name: string; age: number; role: string },
    key: string
) => {
    return obj[key as keyof typeof obj];
}

const res = getPropertyFromObject(newUser1, 'name');

console.log(res);