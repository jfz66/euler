let num = 600851475143;
let sqrt = Math.sqrt(num);
let factors = [];
let i = 2;

while (i <= sqrt) {
	if (num % i === 0) {
		num /= i;
		factors.push(i);
		sqrt = Math.sqrt(num);
	} else {
		i++;
	}
	// console.log(i);
}
factors.push(num);

console.log(factors);
console.log(Math.max(...factors));
