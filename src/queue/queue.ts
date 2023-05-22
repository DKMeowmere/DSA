class Queue {
	front: number
	rear: number
	items: any[]
	constructor() {
		this.front = 0
		this.rear = 0
		this.items = []
	}
	enqueue(value: any): void {
    this.items[this.rear] = value
		this.rear++
	}
	dequeue(): any {
    delete this.items[this.front]
		this.front++
	}
	peek(): any {
		return this.items[this.front]
	}
	size(): number {
		return this.rear - this.front
	}
	isEmpty(): boolean {
		return !this.size
	}
	print(): void {
		if (this.isEmpty()) {
			console.log("Queue is empty")
			return
		}
		for (let i = this.front; i < this.rear; i++) {
			console.log(this.items[i])
		}
	}
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
// console.log(queue.size())
// console.log(queue.peek())
queue.print()
