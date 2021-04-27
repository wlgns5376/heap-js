export default class Heap {

    constructor(nodes) {
        if (nodes) {
            this.nodes = nodes;
            this.up();
        } else {
            this.nodes = [];
        }
    }

    insert(value) {
        this.nodes.push(value);
        this.up();

        return this;
    }

    node (index) {
        return this.nodes[index];
    }

    nodeValue (node) {
        return node;
    }

    switchNode(index, target) {
        this.nodes[index] = this.nodes[target];
    }

    up() {
        let index = this.nodes.length - 1;
        const lastNode = this.node(index);

        while (index > 0) {
            let parentNodeIndex = this.parentNodeIndex(index);
            if (this.compareUp(lastNode, this.node(parentNodeIndex))) {
                this.switchNode(index, parentNodeIndex);
                index = parentNodeIndex;
            } else {
                break;
            }

        }

        this.nodes[index] = lastNode;
    }

    down() {
        let index = 0;
        const count = this.nodes.length;
        const rootNode = this.node(index);
        
        while (this.leftChildNodeIndex(index) < count) {
            var leftChildIndex = this.leftChildNodeIndex(index);
            var rightChildIndex = leftChildIndex + 1;
            let childNodeIndex 
                = rightChildIndex < count && this.nodes[leftChildIndex] > this.nodes[rightChildIndex]
                ? rightChildIndex
                : leftChildIndex;

            if (this.compareDown(rootNode, this.node(childNodeIndex))) {
                this.switchNode(index, childNodeIndex);
                index = childNodeIndex;
            } else {
                break;
            }
        }
        
        this.nodes[index] = rootNode;
    }

    remove() {
        var rootNode = this.nodes[0];
        this.nodes[0] = this.nodes.pop();
        this.down();

        return rootNode;
    }

    parentNodeIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChildNodeIndex(index) {
        return index * 2 + 1;
    }

    compareUp(index, target) {}

    compareDown(index, target) {}
}


export class MinHeap extends Heap {
    compareUp(node, target) {
        return this.nodeValue(target) > this.nodeValue(node);
    }

    compareDown(node, target) {
        return this.nodeValue(target) < this.nodeValue(node);
    }
}


export class MaxHeap extends Heap {
    compareUp(node, target) {
        return this.nodeValue(target) < this.nodeValue(node);
    }

    compareDown(node, target) {
        return this.nodeValue(target) > this.nodeValue(node);
    }
}