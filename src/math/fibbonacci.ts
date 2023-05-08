function fibbonacci(steps: number) {
	const arr: number[] = [0, 1]

	for (let i = 2; i < steps; i++) {
		arr.push(arr[i -1] + arr[i - 2])
	}

	return arr
}

const result = fibbonacci(10)
console.log(result)