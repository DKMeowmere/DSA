type NodeType = {
	value: number
	left: NodeType | null
	right: NodeType | null
}

class Node {
	value: number
	left: NodeType | null
	right: NodeType | null
	constructor(value: any) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinaryTree {
	root: NodeType | null
	constructor() {
		this.root = null
	}
	insert(value: number) {
		const node = new Node(value)

		if (this.isEmpty()) {
			this.root = node
			return
		}

		this.insertNode(node, this.root!)
	}
	search(value: number): boolean {
		if (this.isEmpty()) {
			return false
		}

		return this.searchNode(this.root!, value)
	}
	preorder(node: NodeType | null): void {
		if (!node) {
			return
		}

		console.log(node.value)

		this.preorder(node.left)
		this.preorder(node.right)
	}
	inorder(node: NodeType | null): void {
		if (!node) {
			return
		}

		this.inorder(node.left)

		console.log(node.value)

		this.inorder(node.right)
	}
	postorder(node: NodeType | null): void {
		if (!node) {
			return
		}

		this.postorder(node.left)
		this.postorder(node.right)

		console.log(node.value)
	}
	levelOrder() {
		if (this.isEmpty()) {
			return
		}

		const queue: number[] = []
		queue.push(this.root!.value)

		next(this.root!)
		function next(node: NodeType) {
			console.log(queue.shift())

			if (node.left) {
				queue.push(node.left.value)
			}

			if (node.right) {
				queue.push(node.right.value)
			}

			if (node.left) {
				next(node.left)
			}

			if (node.right) {
				next(node.right)
			}
		}
	}
	min(root: NodeType): number {
		if (!root.left) {
			return root.value
		}

		return this.min(root.left)
	}
	max(root: NodeType): number {
		if (!root.right) {
			return root.value
		}

		return this.max(root.right)
	}
	private insertNode(node: NodeType, root: NodeType): void {
		if (node.value < root.value) {
			if (root.left === null) {
				root.left = node
				return
			}
			return this.insertNode(node, root.left)
		} else {
			if (root.right === null) {
				root.right = node
				return
			}
			return this.insertNode(node, root.right)
		}
	}

	private searchNode(node: NodeType, value: number): boolean {
		if (node.value === value) {
			return true
		}
		if (value < node.value) {
			if (!node.left) {
				return false
			}
			return this.searchNode(node.left, value)
		} else {
			if (!node.right) {
				return false
			}
			return this.searchNode(node.right, value)
		}
	}
	isEmpty() {
		return this.root === null
	}
}

const tree = new BinaryTree()
tree.insert(2)
tree.insert(1)
tree.insert(0)
tree.insert(3)
tree.insert(5)
tree.insert(4)
tree.insert(6)
console.log(tree.root)
