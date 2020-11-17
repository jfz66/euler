// let num = 14684865465465465656465646954455845439854654544815475n;

// let num2 = num + 1n;
// num2 -= 1n;

// // let num = BigInt(146848654654654648166645760);
// console.log(num);
// console.log(num2);

let pow = 1000;
let res = 1n;
for (let i = 1; i <= 1000; i++) {
	res *= 2n;
}
console.log(res);
let str = res.toString();
let sum = 0;
for (let char of str) sum += Number(char);
console.log(sum);
