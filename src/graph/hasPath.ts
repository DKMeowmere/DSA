const graph = {
	A: ["B", "C"],
	B: ["D"],
	C: ["E"],
	D: ["F"],
	E: [],
	F: [],
}

function hasPath(graph: any, source: string, destination: string) {
	const stack = []
	stack.push(graph[source])

	while (stack.length) {
		let curr: string[] = stack[stack.length - 1]
		stack.pop()

		for (let i = 0; i < curr.length; i++) {
			if (curr[i] === destination) {
				return true
			}

			stack.push(graph[curr[i]])
		}
	}
	return false
}

console.log(hasPath(graph, "C", "F"))
