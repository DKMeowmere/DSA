const graph = {
	A: ["B", "C"],
	B: ["D"],
	C: ["E"],
	D: ["F"],
	E: [],
	F: [],
}

function bfs(graph: any, key: string) {
	const queue = []
	let index = 0
	queue.push(graph[key])

	while (index < queue.length) {
		let curr: string[] = queue[index]
		index++

		for (let i = 0; i < curr.length; i++) {
			console.log(curr[i])
			queue.push(graph[curr[i]])
		}
	}
}

bfs(graph, "A")
