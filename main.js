class Queue {
  constructor() {
    this.items = [];
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
const qu = new Queue();

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
// const graphAdjen = [
//   [0, 1, 1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 0, 0],
//   [1, 0, 0, 1, 1, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0],
//   [0, 0, 0, 1, 1, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0, 0],
// ];
// var tempAdjent = graphAdjen;


var tiles = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//DESKRIPSI GAME
var max_block = 5;
var max_zombieEnergy = 9;

class Cell {
  constructor(x, y, dist, prev) {
    this.x = x;
    this.y = y;
    this.dist = dist; //distance
    this.prev = prev; //parent cell in the path
  }
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

class ShortestPathBetweenCellsBFS {
  //BFS, Time O(n^2), Space O(n^2)
  shortestPath(tiles, start, end) {
    var sx = start[0];
    var sy = start[1];
    var dx = end[0];
    var dy = end[1];
    if (matrix[sx][sy] == 0 || matrix[dx][dy] == 0) {
      console.log("There is no path.");
      return;
    }


    //initialize the cells
    var m = matrix.length;
    var n = matrix[0].length;
    var cells = []; //visited
    for (let i = 0; i < m; i++) {
      cells[i] = [];
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] != 0) {
          cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);
        }
      }
    }
    //breadth first search
    var queue = [];
    var src = cells[sx][sy];
    src.dist = 0;
    queue.push(src);
    var dest = null;
    var p;
    while ((p = queue.shift()) != null) {
      //find destination
      if (p.x == dx && p.y == dy) {
        dest = p;
        break;
      }
      // moving up
      this.visit(cells, queue, p.x - 1, p.y, p);
      // moving left
      this.visit(cells, queue, p.x, p.y - 1, p);
      // moving down
      this.visit(cells, queue, p.x + 1, p.y, p);
      //moving right
      this.visit(cells, queue, p.x, p.y + 1, p);
    }

    if (dest == null) {
      console.log("there is no path.");
      return;
    } else {
      let path = [];
      p = dest;
      do {
        path.unshift(p);
      } while ((p = p.prev) != null);
      console.log(`${path}`);
    }
  }

  visit(cells, queue, x, y, parent) {
    //out of boundary
    if (
      x < 0 ||
      x >= cells.length ||
      y < 0 ||
      y >= cells[0].length ||
      cells[x][y] == null
    ) {
      return;
    }

    //update distance , prev node
    var dist = parent.dist + 1;
    var p = cells[x][y];
    if (dist < p.dist) {
      p.dist = dist;
      p.prev = parent;
      queue.push(p);
    }
  }
}

var countTile = 0;
function clickNode(id){
  let countId = 0;
  for(let i = 0; i < graphNumber.length; i++){
    for(let j = 0; j < graphNumber[i].length; j++){
      if(countId == id){

        if(countTile == max_block){
          alert('maximum tile selected');
          return;
        }

        document.getElementById(id).style.backgroundColor = 'red';
        tiles[i][j] = 0;
        countTile += 1;
      }
  
      countId += 1;
    }
  }
}


myObj = new ShortestPathBetweenCellsBFS();

//find path
let start1 = [0, 2];
let end1 = [6, 6];
console.log("case: ");
myObj.shortestPath(tiles, start1, end1);
