const edges: [string, string][] = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "m"],
]

function convertEdgesToGraph(edges: [string, string][]): Map<string, string[]> {
	const map = new Map<string, string[]>()

	for (let i = 0; i < edges.length; i++) {
		if (!map.get(edges[i][0])) {
			map.set(edges[i][0], [edges[i][1]])
		} else {
			map.set(edges[i][0], [...map.get(edges[i][0])!, edges[i][1]])
		}

		if (!map.get(edges[i][1])) {
			map.set(edges[i][1], [edges[i][0]])
		} else {
			map.set(edges[i][1], [...map.get(edges[i][1])!, edges[i][0]])
		}
	}

	return map
}
convertEdgesToGraph(edges)
