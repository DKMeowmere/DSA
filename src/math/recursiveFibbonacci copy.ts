function recursiveFibbonacci(a: number, b: number, steps: number): number[] {
	if (steps === 0) {
		return [a, b]
	}

	return recursiveFibbonacci(b, a + b, steps - 1)
}

console.log(recursiveFibbonacci(0, 1, 10))
