// function makeIterator(array) {
//     let index = 0;
//
//     return {
//         next: function () {
//             if (index < array.length) {
//                 return { value: array[index++], done: false };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// }
//
// let it = makeIterator(['coding', 'blast']);
// console.log(it.next()); // [object Object] { done: false, value: "coding" }
// console.log(it.next()); // [object Object] { done: false, value: "blast" }
// console.log(it.next()); // [object Object] { done: true }


let numbers = [1, 2, 3];

let it = numbers[Symbol.iterator]();

console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: undefined, done: true}


for (let num of numbers) {
    console.log(num);
}

