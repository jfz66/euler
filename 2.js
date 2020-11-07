let fn_1 = 1;
let fn = 2;
let aux = 0;
let sum = 0;

while (fn < 4000000) {
	if (fn % 2 === 0) {
		sum += fn;
	}
	// console.log(fn);
	aux = fn;
	fn += fn_1;
	fn_1 = aux;
}
console.log(sum);
