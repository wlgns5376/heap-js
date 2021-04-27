# 자료구조 - Heap tree

여러 개의 값 중에서 가장 크거나 작은 값을 빠르게 찾기 위해 만든 이진 트리.
최대 값과 최소값을 찾아내는 연산을 빠르게 함

### 복잡도
*O(logN)*

### 저장
새 노드를 끝에 삽입 후 부모 노드와 비교 후 up

### 삭제
루트 노드를 빼내고 마지막 노드를 루트 노드자리에 넣고 자식노드와 비교해서 down


### MinHeap

```js
import { MinHeap } from './src/Heap.js';

const heap = new MinHeap([3, 6, 9, 10])

heap.insert(8)
    .insert(5)
    .insert(2)

// [ 2, 6, 3, 10, 8, 9, 5 ]
```

### MaxHeap

```js
import { MaxHeap } from './src/Heap.js';

const heap = new MaxHeap([3, 6, 9])

heap.insert(8)
    .insert(5)
    .insert(10)

// [ 10, 8, 9, 6, 5, 3 ]
```

### Object Min Heap

```js
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

/*
{ key: 1, value: 'D' },
{ key: 3, value: 'B' },
{ key: 6, value: 'C' },
{ key: 8, value: 'A' }
*/
```
