function climbingStaircase(n: number) {
	const solutions = [1, 2]

	if (n < 3) {
		return solutions[n - 1]
	}

	for (let i = 2; i < n; i++) {
		solutions.push(solutions[i - 1] + solutions[i - 2])
	}
	return solutions[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))
