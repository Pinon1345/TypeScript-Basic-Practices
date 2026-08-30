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


