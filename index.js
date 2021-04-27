import { MinHeap } from './src/Heap.js';

class ObjectMinHeap extends MinHeap {
    nodeValue(node) {
        return node.key
    }
}

const heap = new ObjectMinHeap()

heap.insert({
    key: 8,
    value: 'A'
})
heap.insert({
    key: 3,
    value: 'B'
})
heap.insert({
    key: 6,
    value: 'C'
})
heap.insert({
    key: 1,
    value: 'D'
})

console.log(heap)