function recursiveFactorial(n: number): number {
	if (n === 0) {
		return 1
	}

	return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(5))
