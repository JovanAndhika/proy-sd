
class Queue {
  constructor() {
      this.items = {}
      this.frontIndex = 0
      this.backIndex = 0
  }
  enqueue(item) {
      this.items[this.backIndex] = item
      this.backIndex++
      return item + ' inserted'
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
  get printQueue() {
      return this.items;
  }
}
const queueRow = new Queue();
const queueCol = new Queue();



//BUAT GRAPH
var noAccess = false;
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


//DESKRIPSI GAME
var max_block = 5;
var max_zombieEnergy = 9;
var rowPosition = [-1, 1, 0, 0]
var columnPosition = [0, 0, 1, -1];

function startGame(){


}



function clickNode(clicked_id){
  let count = 0;

  for (let i = 0; i < graphMatrix.length; i++) {
    for (let j = 0; i < graphMatrix[i].length; j++) {
      if(count == clicked_id){
        graphMatrix[i][j] = 0;
      }
      count += 1;
    }
  }
  djikstra();
}


function djikstra(){

}


function checkPosition(){

}


function solve(startRow, startColumn){
  queueRow.enqueue(startRow);
  queueCol.enqueue(startColumn);
  visited[startRow][startColumn] = true;
}


