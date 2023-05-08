function insertionSort(arr: number[]) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i]
		let minusIndex = 1
    let isNumberInserted = false

    while(!isNumberInserted){
      if(numberToInsert > arr[i - minusIndex] || i - minusIndex === -1){
        arr[i - minusIndex + 1] = numberToInsert
        isNumberInserted = true
      }
      else{
        arr[i - minusIndex + 1] = arr[i - minusIndex]
        minusIndex++
      }
    }
	}

	return arr
}


console.log(insertionSort([4, 1, 0, 9, 3, 2, 1, 7]))
console.log(insertionSort([0, 1, 2]))
console.log(insertionSort([3, 2, 1, 0]))
console.log(insertionSort([-6, 20, 8, -2, 4]))
