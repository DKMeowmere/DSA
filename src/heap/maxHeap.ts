class MaxHeap {
	heap: number[]
	constructor(items?: number[]) {
		this.heap = items ? this.heapify(items) : []
	}
	push(item: number) {
		if (!this.heap) {
			this.heap = []
		}

		this.heap[this.heap.length] = item
		let parentIndex = this.getParentIndex(this.heap.length)
		let index = this.heap.length - 1

		while (this.heap[parentIndex] < this.heap[index] && index !== parentIndex) {
			const temp = this.heap[index]
			this.heap[index] = this.heap[parentIndex]
			this.heap[parentIndex] = temp

			index = parentIndex
			parentIndex = this.getParentIndex(index)
		}
	}
	pop() {
		if (this.heap.length === 0) {
			return null
		}
		if (this.heap.length === 1) {
			return this.heap.pop()
		}

		const peek = this.peek()
		let index = 0
		this.heap[index] = this.heap.pop()!

		while (index < this.heap.length) {
			let greaterIndex: number | null = this.getLeftChildIndex(index)

			if (this.getLeftChildIndex(index) >= this.heap.length) {
				break
			} else if (
				this.heap[this.getLeftChildIndex(index)] >
				this.heap[this.getRightChildIndex(index)]
			) {
				greaterIndex = this.getRightChildIndex(index)
			}

			if (this.heap[index] < this.heap[greaterIndex]) {
				const temp = this.heap[index]
				this.heap[index] = this.heap[greaterIndex]
				this.heap[greaterIndex] = temp
				index = greaterIndex
			} else {
				break
			}
		}

		return peek
	}
	heapify(items: number[]) {
		for (let i = 0; i < items.length; i++) {
			this.push(items[i])
		}

		return this.heap
	}
	getLeftChildIndex(index: number) {
		return 2 * index + 1
	}
	getRightChildIndex(index: number) {
		return 2 * index + 2
	}
	getParentIndex(index: number) {
		return Math.floor((index - 1) / 2)
	}
	peek() {
		return this.heap[0] || null
	}
	size() {
		return this.heap.length
	}
}
