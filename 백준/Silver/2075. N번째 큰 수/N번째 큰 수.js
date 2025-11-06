const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // 표준 입력 스트림 연결
  output: process.stdout, // 표준 출력 스트림 연결
});

/**
 * 최소 힙(Min Heap) 클래스
 * - 이진 힙 구조를 사용하여 최솟값을 빠르게 찾을 수 있게 구현
 * - 0번 인덱스는 null로 두어 인덱스 계산을 편리하게 함 (1부터 시작)
 * - 부모 노드의 인덱스 = Math.floor(현재 인덱스 / 2)
 * - 왼쪽 자식 노드의 인덱스 = 현재 인덱스 * 2
 * - 오른쪽 자식 노드의 인덱스 = 현재 인덱스 * 2 + 1
 */
class MinHeap {
  /**
   * 힙 초기화
   * - heap[0]은 null로 설정하여 인덱스 계산을 편리하게 함
   */
  constructor() {
    this.heap = [null];
  }

  /**
   * 새로운 값을 힙에 추가
   * - 값을 마지막에 추가한 후, 부모 노드와 비교하며 위로 올림(up-heap)
   * value = 힙에 추가할 값
   * 시간복잡도: O(log N)
   */
  push(value) {
    // 값을 힙의 마지막에 추가
    this.heap.push(value);
    // 추가된 값의 인덱스
    let currentIndex = this.heap.length - 1;

    // root(인덱스 1)에 도달하거나 부모 노드가 더 작을 때까지 반복
    while (currentIndex > 1) {
      // 현재 노드의 부모 노드 인덱스 계산
      const parentIndex = Math.floor(currentIndex / 2);
      // 부모 노드가 현재 노드보다 작거나 같으면 힙 속성 만족, 중단
      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

      // 부모 노드가 더 크면 위치 교환 (swap)
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      // 현재 위치를 부모 노드 위치로 업데이트
      currentIndex = parentIndex;
    }
  }

  /**
   * 힙에서 최솟값을 제거하고 반환
   * - root 노드를 제거하고 마지막 노드를 root로 이동
   * - 자식 노드들과 비교하며 아래로 내림(down-heap)
   * 제거된 최솟값 또는 힙이 비어있는 경우 null
   * 시간복잡도: O(log N)
   */
  pop() {
    // 힙이 비어있으면 null 반환
    if (this.heap.length <= 1) return null;

    // root 값을 저장 (반환할 최솟값)
    const min = this.heap[1];
    // 마지막 노드를 root로 이동
    this.heap[1] = this.heap.pop();
    // 현재 비교할 노드의 인덱스
    let currentIndex = 1;

    while (true) {
      // 왼쪽, 오른쪽 자식 노드의 인덱스 계산
      const leftIndex = currentIndex * 2;
      const rightIndex = currentIndex * 2 + 1;
      // 현재까지 찾은 최소값의 인덱스
      let minIndex = currentIndex;

      // 왼쪽 자식이 존재하고 현재 최소값보다 작으면 minIndex 업데이트
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[minIndex]
      ) {
        minIndex = leftIndex;
      }

      // 오른쪽 자식이 존재하고 현재 최소값보다 작으면 minIndex 업데이트
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[minIndex]
      ) {
        minIndex = rightIndex;
      }

      // 자식 노드들이 현재 노드보다 크거나 같으면 힙 속성 만족, 중단
      if (minIndex === currentIndex) break;

      // 가장 작은 값을 가진 노드와 위치 교환 (swap)
      [this.heap[currentIndex], this.heap[minIndex]] = [
        this.heap[minIndex],
        this.heap[currentIndex],
      ];
      // 현재 위치를 업데이트
      currentIndex = minIndex;
    }

    return min;
  }

  /**
   * 현재 힙의 크기를 반환
   * 힙에 저장된 요소의 개수 (0번 인덱스 제외)
   * 시간복잡도: O(1)
   */
  size() {
    return this.heap.length - 1;
  }

  /**
   * 힙의 최솟값을 반환 (제거하지 않음)
   * 힙의 최솟값 (root 노드)
   * 시간복잡도: O(1)
   */
  peek() {
    return this.heap[1];
  }
}

// N: 표의 크기 및 구해야 할 N번째 큰 수의 N
// -1로 초기화하여 첫 입력을 N값으로 받을 것임을 표시
let N = -1;

// 상위 N개의 큰 수를 유지할 최소 힙 생성
const minHeap = new MinHeap();

// 입력 처리
rl.on("line", (line) => {
  // 첫 번째 입력인 경우 N 값을 설정
  if (N === -1) {
    N = parseInt(line);
    return;
  }

  // 각 줄의 입력을 공백으로 분리하여 처리
  line.split(" ").forEach((v) => {
    // 현재 수를 최소 힙에 추가
    minHeap.push(parseInt(v));
    // 힙의 크기가 N을 초과하면 최솟값 제거
    // 이렇게 하면 항상 상위 N개의 큰 수만 유지됨
    if (minHeap.size() > N) minHeap.pop();
  });

  // 한 줄 처리가 끝날 때마다 남은 줄 수 감소
  N--;
  // 모든 줄을 처리했으면 입력 종료
  if (N === 0) rl.close();
}).on("close", () => {
  // 최소 힙의 root가 N번째 큰 수
  // (힙에는 N개의 큰 수가 있고, 그 중 가장 작은 수가 N번째 큰 수)
  console.log(minHeap.peek());
  process.exit();
});
