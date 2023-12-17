
class Queue {
  constructor() {
      this.items = {}
      this.frontIndex = 0
      this.backIndex = 0
  }
  enqueue(item) {
      this.items[this.backIndex] = item
      this.backIndex++
  }
  dequeue() {
      const item = this.items[this.frontIndex]
      delete this.items[this.frontIndex]
      this.frontIndex++
      return item
  }
  peek() {
      return this.items[this.frontIndex]
  }
}

const queueRow = new Queue();
const queueCol = new Queue();

// Graph matrix representing the game board
var graphMatrix = [
    [0,1,1,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0],
    [0,1,1,0,0,1,0,0,0],
    [0,0,1,0,0,1,1,0,0],
    [0,0,0,1,1,0,0,1,0],
    [0,0,0,0,1,0,0,1,1],
    [0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,1,0,0],
  ];
var temp = graphMatrix;

var visited = [
[false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false],

[false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false],

[false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false],
[false,false,false,false,false,false,false,false,false]
];

var max_block = 5;
var max_zombieEnergy = 9;
var zombieRow = 1;  // Starting row for the zombie
var zombieCol = 1;  // Starting column for the zombie
var endRow = 8;     // Row for the end button
var endCol = 8;     // Column for the end button
var rowPosition = [-1, 1, 0, 0];
var columnPosition = [0, 0, 1, -1];


