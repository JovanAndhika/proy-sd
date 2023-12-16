class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + " inserted";
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  get Length() {
    return this.backIndex - this.frontIndex;
  }

  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}
const queue = new Queue();

class Cell {
  constructor(x, y, distance, prev) {
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.prev = prev; //parent cell (last visited cell)
  }
}

class ShortestPathBetweenCellsBFS {


  shortestPath(graphAdjen, startRow, startColumn, endRow, endColumn) {
    var start_r = startRow;
    var start_c = startColumn;
    var desti_r = endRow;
    var desti_c = endColumn;


    //JIKA ADJENCY MATRIX ADALAH 0
    if (
      graphAdjen[startRow][startColumn] == 0 ||
      graphAdjen[endRow][endColumn] == 0
    ) {
      alert("There is no path.");
      return;
    }

    
    var visited = [];
    for (let i = 0; i < graphAdjen.length; i++) {
      visited[i] = [];
      for (let j = 0; j < graphAdjen[i].length; j++) {
        if (graphAdjen[i][j] != 0) {
          visited[i][j] = new Cell(i, j, Number.MAX_VALUE, null);
        }
      }
    }

    
    //BFS
    var search = visited[sx][sy];
    search.distance = 0;
    queue.enqueue(src);

    var dest = null;
    var p = queue.dequeue();
    while (p != null) {

      //find destination
      if (p.x == dx && p.y == dy) {
        dest = p;
        break;
      }
    }
  }
}
//BUAT GRAPH
const graphNumber = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89],
];

//BUAT EDGES GRAPH
const graphAdjen = [
  [0, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, "E", 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
];
var tempAdjent = graphAdjen;

//DESKRIPSI GAME
var max_block = 5;
var max_zombieEnergy = 9;
var rowPosition = [-1, 1, 0, 0];
var columnPosition = [0, 0, 1, -1];

function startGame() {
  solve(6, 0);
}

function refreshGame() {
  graphAdjen = tempAdjent;
}

//FUNCTION clickNode
var countTile = 0;

function clickNode(clicked_id) {
  let countID = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < graphNumber[i].length; j++) {
      if (countID == clicked_id) {
        if (countTile == max_block) {
          alert("max_block tercapai");
        } else {
          document.getElementById(clicked_id).style.backgroundColor = "red";
          graphAdjen[i][j] = 0;
          countTile += 1;
        }
      }
      countID += 1;
    }
  }
}
