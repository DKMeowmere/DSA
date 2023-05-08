function binarySearchRecursive(arr: number[], target: number) {
	return searchIndex(arr, 0, arr.length - 1, target)
}

function searchIndex(
	arr: number[],
	left: number,
	right: number,
	target: number
): number {
	let middle = Math.floor((left + right) / 2)

	if (arr[middle] === target) {
		return middle
	}

	if (left >= right) {
		return -1
	}

	if (arr[middle] < target) {
		return searchIndex(arr, middle + 1, right, target)
	}

	if (arr[middle] > target) {
		return searchIndex(arr, left, middle - 1, target)
	}

	return NaN
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 10))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 1))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 2))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 3))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 4))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 6))
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 7))
console.log(binarySearchRecursive([2, 4, 5, 6], 5))
