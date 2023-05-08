function cartesianProduct(a: number[], b: number[]): number[][] {
	const arr: number[][] = []

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			arr.push([a[i], b[j]])
		}
	}
	return arr
}

console.log(cartesianProduct([1, 2], [3, 4]))
