function selectionSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		let smallestIndex = 0
		let isSorted = true

		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[smallestIndex]) {
				smallestIndex = j
				isSorted = false
			}
		}

		if (isSorted) {
			break
		}
		const temp = arr[smallestIndex]
		arr[smallestIndex] = arr[i]
		arr[i] = temp
	}
	return arr
}

console.time()
console.log(selectionSort([4, 1, 0, 9, 3, 2, 1, 7]))
console.timeEnd()

// console.log(selectionSort([0, 1, 2]))
// console.log(selectionSort([3, 2, 1, 0]))
