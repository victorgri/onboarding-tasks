// 10 examples of TypeScript features

// string
const str: string = "Hello, TypeScript!";
// number
const num: number = 42;
// boolean
const bool: boolean = true;
// array
const arr: number[] = [1, 2, 3, 4, 5];
// tuple
const tuple: [string, number] = ["Age", 30];
// type
type User = {
    name: string;
    age: number;
};
// interface
interface Product {
    id: number;
    name: string;
    price: number;
};
// generic function
function showGenericApp<T>(someyhing: T): T {
    return someyhing;
}
// enum
enum Color {
    Red,
    Green,
    Blue
}
// union type
type ID = number | string;