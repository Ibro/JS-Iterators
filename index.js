function makeIterator(array) {
    let index = 0;

    return {
        next: function () {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

let it = makeIterator(['coding', 'blast']);
console.log(it.next()); // [object Object] { done: false, value: "coding" }
console.log(it.next()); // [object Object] { done: false, value: "blast" }
console.log(it.next()); // [object Object] { done: true }