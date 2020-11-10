let sum1 = 0;
let sum2 = 0;
let max = 100;
for (let i = 1; i <= max; i++) {
	sum1 += i * i;
	// console.log(sum1);
}

for (let i = 1; i <= max; i++) {
	sum2 += i;
}
sum2 *= sum2;

console.log(sum2 - sum1);
