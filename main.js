//JOVAN
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
  get printQueue() {
    return this.elements;
  }
}
let queue_spX = new Queue();
let queue_spY = new Queue();


//JOVAN
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


//DANIEL
let tiles = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
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

//JOVAN
function setTiles(tiles, x, y) {
  tiles[x][y] = 0;
}

//DESKRIPSI GAME
var max_block = 5;
var max_zombieEnergy = 13;

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

class ShortestPathBetweenCells {
  //DISTANCE SHORT TERRENCE & JOVAN
  shortestPath(tiles, start, end) {
    //start node
    var sx = start[0];
    var sy = start[1];

    //end node
    var dx = end[0];
    var dy = end[1];

    // if start or end value is 0, return
    if (tiles[sx][sy] === 0 || tiles[dx][dy] === 0) {
      console.log("There is no path.");
      return;
    }
    // initialize the cells
    var m = tiles.length;
    var n = tiles[0].length;
    var cells = [];
    for (let i = 0; i < m; i++) {
      cells[i] = [];
      for (let j = 0; j < n; j++) {
        cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);
      }
    }


    // breadth first search
    var queue = [];
    var src = cells[sx][sy];
    src.dist = 0;
    queue.push(src);
    var dest = null;
    var p;
    while (queue.length > 0) {
      p = queue.shift();
      // find destination
      if (p.x === dx && p.y === dy) {
        dest = p;
        break;
      }
      // moving up, left, down, right
      this.visit(cells, queue, p.x - 1, p.y, p);
      this.visit(cells, queue, p.x, p.y - 1, p);
      this.visit(cells, queue, p.x + 1, p.y, p);
      this.visit(cells, queue, p.x, p.y + 1, p);
    }

    if (dest == null || dest.dist === Number.MAX_VALUE) {
      console.log("There is no path.");
      return;
    } else {
      let path = [];
      p = dest;
      do {
        path.unshift(p);
        p = p.prev;
      } while (p != null);

      
      //JOVAN
      this.validOut(path);

      console.log("Shortest path: ");
      path.forEach((p) => console.log(p));
      path.forEach((p) => queue_spX.enqueue(p.x));
      path.forEach((p) => queue_spY.enqueue(p.y));
    }
  }

  //JOVAN
  validOut(path){
    if(path.length <= 3){
      alert("you're cheating");
    }

    if(path.length >= max_zombieEnergy){
      alert("you win");
    }else{
      alert("you lose");
    }
  }

  //JOSH
  visit(cells, queue, x, y, parent) {
    if (
      x < 0 ||
      x >= cells.length ||
      y < 0 ||
      y >= cells[0].length ||
      tiles[x][y] === 0
    ) {
      return;
    }
    var dist = parent.dist + 1;
    var p = cells[x][y];
    if (dist < p.dist) {
      p.dist = dist;
      p.prev = parent;
      queue.push(p);
    }
  }
}


//DANIEL
var countTile = 0;
function clickNode(id) {
  let countId = 0;
  for (let i = 0; i < graphNumber.length; i++) {
    for (let j = 0; j < graphNumber[i].length; j++) {
      if (countId == id) {
        if (countTile == max_block) {
          alert("maximum tile selected");
          return;
        }

        document.getElementById(id).style.backgroundColor = "red";
        setTiles(tiles, i, j);
        // alert(tiles[i][j]);
        countTile += 1;
      }
      countId += 1;
    }
  }
}

myObj = new ShortestPathBetweenCells();

//JOVAN
function execute() {
  //find path
  let start1 = [2, 0];
  let end1 = [7, 6];
  console.log("case: ");
  myObj.shortestPath(tiles, start1, end1);
  console.log(queue_spX.printQueue);
  console.log(queue_spY.printQueue);



  //JOSH
  while (!queue_spX.isEmpty && !queue_spY.isEmpty) {
    let x = queue_spX.dequeue();
    let y = queue_spY.dequeue();
    let buttonId = x * 9 + y;

    let buttonElement = document.getElementById(buttonId.toString());
    if (buttonElement) {
      buttonElement.classList.remove('green');
      buttonElement.classList.add('blue');
    }
  }
  
}
