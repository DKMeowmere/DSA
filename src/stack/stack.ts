class Stack {
	items: any[]
	constructor() {
		this.items = []
	}
	push(item: any): void {
		this.items.push(item)
	}
	pop(): any {
		return this.items.pop()
	}
	peek(): any {
		return this.items.at(-1)
	}
	size(): number {
		return this.items.length
	}
	isEmpty(): boolean {
		return !this.items.length
	}
	print(): void {
		console.log("---------------")
		if (this.isEmpty()) {
			console.log("Stack is empty")
		}
		for (let i = 0; i < this.items.length; i++) {
			console.log(this.items[i])
		}
		console.log("---------------")
	}
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
stack.print()
