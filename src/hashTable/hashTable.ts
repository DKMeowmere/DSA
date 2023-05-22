class HashTable {
	private table: any[]
	size: number
	constructor() {
		this.table = []
		this.size = 0
	}
	private hash(string: string): number {
    //may  produce collisions
		let index = 0

		for (let i = 0; i < string.length; i++) {
			index += Math.pow(string.charCodeAt(i), 4)
		}

		return index
	}
	set(key: string, value: any) {
		const hash = this.hash(key)
		this.size++

		this.table[hash] = value
	}
	get(key: string) {
		const hash = this.hash(key)

		return this.table[hash]
	}
	delete(key: string) {
		const hash = this.hash(key)
		const value = this.table[hash]
		delete this.table[hash]
		this.size--

		return value
	}
}

const hashTable = new HashTable()
hashTable.set("1", 2)
console.log(hashTable.get("1"))
console.log(hashTable.size)
hashTable.delete("1")
console.log(hashTable.get("1"))
