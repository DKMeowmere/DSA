function ternarySearch(arr: number[], target: number) {
	let left = 0
	let right = arr.length

	while (left <= right) {
		let middle1 = left + Math.round((right - left) / 3)
		let middle2 = right - Math.round((right - left) / 3)

		if (target === arr[middle1]) {
			return middle1
		}

		if (target === arr[middle2]) {
			return middle2
		}

		if (target < arr[middle1]) {
			right = middle1 - 1
			continue
		} else if (target > arr[middle2]) {
			left = middle2 + 1
			continue
		} else {
			left = middle1 + 1
			right = middle2 - 1
		}
	}

  return -1
}

console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 10))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 1))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 2))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 3))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 4))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 5))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 6))
console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7], 7))
console.log(ternarySearch([2, 4, 5, 6], 5))
