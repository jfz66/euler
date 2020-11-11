function isPrime(n) {
	let sqrt = Math.sqrt(n);
	let i = 2;
	while (i <= sqrt) {
		if (n % i === 0) {
			return 0;
		}
		i++;
	}
	return 1;
}

function getPrimesInfOrEqualTo(n) {
	let primes = 0;
	let arr = [];
	let i = 2;
	while (i <= n) {
		if (isPrime(i)) {
			arr.push(i);
		}
		i++;
	}
	return arr;
}
let n = 13;
let primes = getPrimesInfOrEqualTo(n);
let powers = [];

let res = 1;

primes.forEach((prime) => {
	power = 0;
	value = prime;
	while (value <= n) {
		value *= prime;
		power++;
	}
	powers.push(power);
	res *= Math.pow(prime, power);
});

console.log(powers);
console.log(res);
