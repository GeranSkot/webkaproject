 const arr = [1,2,3,4,5,6,7,8];

// arr.pop();
// arr.push(10);
//
// console.log(arr);
//
// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value);
// }
//
// arr.forEach(function (item,i,arr) {
//     console.log(`${i}: ${item} inside massive ${arr}`)
// });

const str = prompt("", "");

const products = str.split(", ");

products.sort();

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b;
}

console.log(products);
console.log(products.join('; '));
