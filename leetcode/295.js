class MedianFinder {
  constructor() {
    this.minHeap = new MinPriorityQueue({ priority: (x) => x });
    this.maxHeap = new MaxPriorityQueue({ priority: (x) => x });
  }

  addNum(num) {
    this.minHeap.enqueue(num);

    if (this.minHeap.size() > this.maxHeap.size()) {
      const val = this.minHeap.dequeue().element;
      this.maxHeap.enqueue(val);
    }

    if (this.maxHeap.size() > this.minHeap.size()) {
      const val = this.maxHeap.dequeue().element;
      this.minHeap.enqueue(val);
    }
  }

  findMedian() {
    if (this.minHeap.size() === this.maxHeap.size()) {
      const num1 = this.minHeap.front().element;
      const num2 = this.maxHeap.front().element;
      return (num1 + num2) / 2;
    }

    if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.front().element;
    }
    return this.maxHeap.front().element;
  }
}
