function mergeSort(arr: number[]): any {
	if (arr.length === 1 || arr.length === 0) {
		return arr
	}
	const middle = Math.floor(arr.length / 2)

	return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

function merge(left: number[], right: number[]): number[] {
	const arr: number[] = []

	while (left.length && right.length) {
		if (left[0] > right[0]) {
			arr.push(right[0])
			right.shift()
		} else {
			arr.push(left[0])
			left.shift()
		}
	}

	if (!left.length) {
		for (let i = 0; i < right.length; i++) {
			arr.push(right[i])
		}
	}

	if (!right.length) {
		for (let i = 0; i < left.length; i++) {
			arr.push(left[i])
		}
	}

	return arr
}

// console.log(quickSort([4, 1, 0, 9, 3, 2, 1, 7]))
// console.log(quickSort([0, 1, 2]))
// console.log(quickSort([3, 2, 1, 0]))
console.log(mergeSort([-6, 20, 8, -2, 4]))
