const add = (num1: number, num2: number) => {
    return num1 + num2;
}

add(7, 8);

// Primitive

const studentName: string = "Fourkan Bin Ilias";

const age: number = 22;

const isStudent: boolean = true;

const coupon: null = null;

const deliveryAddress: undefined = undefined;


// Non - Primitive (Objects and Arrays and Functions)

const foodName: string[] = ["Pizza", "Burger", "Pasta", "Fried Rice", "Chicken Curry", "Beef Steak", "Fish Fry", "Soup"];

foodName.push("Sushi");

// tuple - fixed length and fixed type of array

const studentLocation: [number, number] = [22.45345, 17.34234];
const studentWithCourse: [string, string] = ["Fourkan Bin Ilias", "Web Development"];
const studentWithRoll: [string, number] = ["Fourkan Bin Ilias", 100];


// Objects 

// interface User {
//     id: number,
//     name: string,
//     age: number,
//     isStudent: boolean,
//     organization?: string, // Literal type 
//     address?: {
//         city: string,
//         country: string,
//     }
// }

// type User = {
//     id: number,
//     name: string,
//     age: number,
//     isStudent: boolean,
//     organization?: string, // Literal type 
//     address?: {
//         city: string,
//         country: string,
//     }
// }


const user1: User = {
    id: 100,
    name: "Fourkan Bin Ilias",
    age: 24,
    isStudent: true,
    organization: "Programming Hero",
    address: {
        city: "Chittagong",
        country: "Bangladesh",
    },
};



// Type Aliases

const user2: User = {
    id: 101,
    name: "Mr. Fungshuk Wanglue",
    age: 41,
    isStudent: false,
    address: {
        city: "NYC City",
        country: "USA",
    }
};

type Food = {
    name: string,
    price: number,
    quantity: number,
    quality: string,
    isTesty: boolean,
}

const food: Food = {
    name: "Pizza",
    price: 500,
    quantity: 1,
    quality: "Good",
    isTesty: true,
};

const getFoodPrice = (product: Food) => {
    return product.price;
}

// rest operator and spread operator

type User = {
    name: string,
    maritalStatus: string,
    profession: string,
    age: number,
    address: {
        city: string,
        postalCode?: number,
    }
};

const user: User = {
    name: "Mrs. Anabiya Meherjabin",
    maritalStatus: "Single",
    profession: "Software Engineer",
    age: 24,
    address: {
        city: "Dhaka",
    }
}

// const userName = user.name;

const { name: userName } = user;
console.log(userName);

const userProfession = user.profession;
const userAge = user.age;

const updateUser = {
    ...user,
    age: 25,
}

const arr: number[] = [11, 12, 13, 14, 15];

const homeFoods = ["Dom Biriani", "Kacchi Biryani", "Fried Rice", "Chicken Curry", "Beef Steak", "Fish Fry", "Soup"];

const homeDrinks = ["Coca Cola", "Pepsi", "Fanta", "Sprite", "7Up", "Mountain Dew"];

const allHomeFoodsAndDrinks: string[] = [...homeFoods, ...homeDrinks];

console.log(allHomeFoodsAndDrinks);



const sum = (...numbers: number[]) => {
    console.log(numbers);
    const result = numbers.reduce((total, number) => total + number, 0);
}
sum(10, 20, 30, 40, 50);


// union type and intersection type

let userId: string | number;

userId = 100;
userId = "100";

type paymentMethod = "Cash" | "Card" | "Bkash" | "Nagad";

const payment = (paymentGateway: paymentMethod) => {
    console.log(`Payment method is ${paymentGateway}`);
}

payment("Bkash");


// intersection type

type Profile = {
    id: number,
    name: string,
    profilePicture?: undefined | string,
    email: string,
    phone: number,
    nationalId: number,
    address: {
        city: string,
        postalCode: number,
    },
}

type Employee = {
    employeeId: number,
    role: "admin" | "user",
    salary: number,
    department: string,
}

type WorkingStatus = {
    isWorking: boolean,
    workingHours: number,
}

const profileUser : Profile & Employee & WorkingStatus = {
    id: 101,
    name: "Fourkan Bin Ilias",
    email: "pinonfurkan1@gmail.com",
    phone: 1680224284,
    nationalId: 9178803053,
    address: {
        city: "Agrabad, Chittagong",
        postalCode: 4424,
    },
    employeeId: 45632782,
    role: "admin",
    salary: 52000,
    department: "IT",
    isWorking: true,
    workingHours: 8,
}

console.log("Employee Profile Details:", profileUser);


// same same but different

const myAgeIs = 24;

const msg : string = myAgeIs >= 18 ? "You are eligible for voting" : "You are not eligible for voting";

console.log(msg);

const username : string | null = "Fourkan Bin Ilias";
const displayName = username ?? "Guest User";

console.log(displayName);