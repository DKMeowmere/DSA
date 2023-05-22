function linearSearch(arr: any[], target: any) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i
		}
	}

	return -1
}

console.log(linearSearch([0, 1, 2, 3, 4, 5, 6, 7], 4))
console.log(linearSearch([1, 1, 2, 4233, 67, 5, 1, 7], 67))
