function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1.toUpperCase()); // Works, because output1 is string
console.log(output2.toFixed(2));    // Works, because output2 is number
