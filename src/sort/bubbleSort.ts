function bubbleSort(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		let isSorted = true

		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				isSorted = false
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}

		if (isSorted) {
			break
		}
	}

	return arr
}

console.time()
console.log(bubbleSort([4, 1, 0, 9, 3, 2, 1, 7]))
console.timeEnd()
// console.log(bubbleSort([0, 1, 2]))
// console.log(bubbleSort([3, 2, 1, 0]))
