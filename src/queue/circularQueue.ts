class CircularQueue {
	front: number
	rear: number
	items: any[]
	capasity: number
	currentLength: number
	constructor(capasity: number) {
		this.front = -1
		this.rear = -1
		this.currentLength = 0
		this.items = []
		this.capasity = capasity
	}
	enqueue(value: any): void {
		if (this.isFull()) {
			return
		}
		this.currentLength++
		this.rear++

		if (this.front === -1) {
			this.front = 0
		}

		if (this.rear >= this.capasity) {
			this.rear = 0
		}
		this.items[this.rear] = value
	}
	dequeue(): any {
		const item = this.items[this.front]
		delete this.items[this.front]
		this.currentLength--
		this.front++

		if (this.front >= this.capasity) {
			this.front = 0
		}

		if (this.isEmpty()) {
			this.front = -1
			this.rear = -1
		}

		return item
	}
	peek(): any {
    if(this.isEmpty()){
      return null
    }

		return this.items[this.front]
	}
	size(): number {
		return this.currentLength
	}
	isEmpty(): boolean {
		return this.currentLength === 0
	}
	print(): void {
		if (this.isEmpty()) {
			console.log("Queue is empty")
			return
		}
		const smaller = Math.min(this.front, this.rear)
		const bigger = Math.max(this.rear, this.front)

		for (let i = smaller; i <= bigger; i++) {
			console.log(this.items[i])
		}
	}
	isFull(): boolean {
		return this.currentLength === this.capasity
	}
}

const queue = new CircularQueue(4)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.dequeue()
queue.enqueue(5) 
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
// console.log(queue.peek())
// queue.print()


// console.log("REAR:" + this.rear)
// console.log("FRONT:" + this.front)
// console.log("ITEMS:")
// console.log(this.items)
// console.log("-------------------")