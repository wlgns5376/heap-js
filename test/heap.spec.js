import { MinHeap, MaxHeap } from '../src/Heap.js'

test("heap min insert test", () => {
    const heap = new MinHeap();

    heap.insert(8);
    heap.insert(5);

    expect(heap.remove()).toEqual(5);
})

test("heap max insert test", () => {
    const heap = new MaxHeap();

    heap.insert(5);
    heap.insert(8);

    expect(heap.remove()).toEqual(8);
})

test("heap min insert test", () => {
    const heap = new MinHeap([6, 7, 9]);

    heap.insert(8);
    heap.insert(5);

    expect(heap.remove()).toEqual(5);
})


test("heap max init and insert test", () => {
    const heap = new MaxHeap([3, 6]);

    heap.insert(5);
    heap.insert(8);

    expect(heap.remove()).toEqual(8);
})