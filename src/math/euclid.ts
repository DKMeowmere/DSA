function euclid(a: number, b: number): number {
	const biggerNum = a > b ? a : b
	const smallerNum = a > b ? b : a

	if (biggerNum % smallerNum === 0) {
		return smallerNum
	}

	return euclid(smallerNum, biggerNum % smallerNum)
}

console.log(euclid(42, 15))
console.log(euclid(10, 13))
console.log(euclid(12, 30))
