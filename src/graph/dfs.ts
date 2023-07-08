const graph = {
	A: ["B", "C"],
	B: ["D"],
	C: ["E"],
	D: ["F"],
	E: [],
	F: [],
}

function dfs(graph:any, key: string) {
	const stack = []
	stack.push(graph[key])

	while (stack.length) {
		let curr: string[] = stack[stack.length - 1]
		stack.pop()

		for (let i = 0; i < curr.length; i++) {
      console.log(curr[i])
			stack.push(graph[curr[i]])
		}
		console.log(curr)
	}
}

dfs(graph, "A")
