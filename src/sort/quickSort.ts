function quickSort(arr: number[]): number[] {
	if (arr.length === 1 || arr.length === 0) {
		return arr
	}
	const pivot = arr[arr.length - 1]
	const left: number[] = []
	const right: number[] = []

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > pivot) {
			right.push(arr[i])
		} else {
			left.push(arr[i])
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 1, 0, 9, 3, 2, 1, 7]))
console.log(quickSort([0, 1, 2]))
console.log(quickSort([3, 2, 1, 0]))
console.log(quickSort([-6, 20, 8, -2, 4]))
