function binarySearch(arr: number[], target: number) {
	let left = 0
	let right = arr.length

	while (true) {
		let middle = Math.floor((right + left) / 2)

		if (arr[middle] === target) {
			return middle
		}

		if (arr[middle] < target) {
			if (left === middle) {
				return -1
			}
			left = middle + 1
		}

		if (arr[middle] > target) {
			if (right === middle) {
				return -1
			}
			right = middle - 1
		}
	}
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 10))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7))
console.log(binarySearch([ 2, 4, 5, 6], 5))
