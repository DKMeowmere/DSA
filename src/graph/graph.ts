class Graph {
	adjatencyList: { [key: string]: Set<string> }
	constructor() {
		this.adjatencyList = {}
	}
	addVertex(vertex: string) {
		if (this.adjatencyList[vertex]) {
			return
		}

		this.adjatencyList[vertex] = new Set()
	}
	addEdge(vertex1: string, vertex2: string) {
		if (!this.adjatencyList[vertex1]) {
			this.addVertex(vertex1)
		}

		if (!this.adjatencyList[vertex2]) {
			this.addVertex(vertex2)
		}
		this.adjatencyList[vertex1].add(vertex2)
		this.adjatencyList[vertex2].add(vertex1)
	}
	display() {
		for (let vertex in this.adjatencyList) {
			console.log(vertex + " -> " + [...this.adjatencyList[vertex]])
		}
	}
	hasEdge(vertex1: string, vertex2: string) {
		return (
			this.adjatencyList[vertex1].has(vertex2) &&
			this.adjatencyList[vertex2].has(vertex1)
		)
	}
	removeEdge(vertex1: string, vertex2: string) {
		this.adjatencyList[vertex1].delete(vertex2)
		this.adjatencyList[vertex2].delete(vertex1)
	}
	removeVertex(vertex: string) {
		delete this.adjatencyList[vertex]

		for (let key in this.adjatencyList) {
			if (this.adjatencyList[key].has(vertex)) {
				this.adjatencyList[key].delete(vertex)
			}
		}
	}
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B")
graph.addEdge("B", "C")
// graph.removeEdge("B", "C")
// graph.removeVertex("B")
graph.display()

console.log(graph)