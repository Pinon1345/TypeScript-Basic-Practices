
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

const newUser1: IUserRole = {
    name: "Fourkan Bin Ilias",
    age: 24,
    role: "admin",
}

console.log("Interface New User Info: ", newUser1);

type IsBoolean = boolean;

const isAdmin: IsBoolean = false;
const isEmployee: IsBoolean = true;

type Friends = string[];


interface IFriends {
    [index: number]: string;
}

const friends: IFriends = ["Anabiya", "Anaiya", "Malaika", "Fahim", "Muntaha", "Mumtahina", "Farha"];

console.log("Friends List: ", friends);

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