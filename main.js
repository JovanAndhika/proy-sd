
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
var zombieRow = 0;  // Starting row for the zombie
var zombieCol = 0;  // Starting column for the zombie
var endRow = 8;     // Row for the end button
var endCol = 8;     // Column for the end button
var rowPosition = [-1, 1, 0, 0];
var columnPosition = [0, 0, 1, -1];

function startGame(){
    solve(zombieRow, zombieCol);
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
 
}

function isSafe(row, col) {
    return (row >= 0) && (row < graphMatrix.length) && 
           (col >= 0) && (col < graphMatrix[row].length) &&
           graphMatrix[row][col] === 1;
}

function solve(startRow, startColumn) {
    queueRow.enqueue(startRow);
    queueCol.enqueue(startColumn);
    visited[startRow][startColumn] = true;

    while (queueRow.peek() !== undefined && max_zombieEnergy > 0) {
        let currRow = queueRow.dequeue();
        let currCol = queueCol.dequeue();
        max_zombieEnergy--;

        // Check if zombie reached the end
        if (currRow === endRow && currCol === endCol) {
            alert('Zombie wins!');
            return;
        }

        // Check adjacent nodes
        for (let i = 0; i < 4; i++) {
            let nextRow = currRow + rowPosition[i];
            let nextCol = currCol + columnPosition[i];

            if (isSafe(nextRow, nextCol) && !visited[nextRow][nextCol]) {
                queueRow.enqueue(nextRow);
                queueCol.enqueue(nextCol);
                visited[nextRow][nextCol] = true;
            }
        }
    }

    // Check if zombie energy depleted
    if (max_zombieEnergy <= 0) {
        alert('Player wins!');
    }
}

function executeMove() {
    // This function should be called each time the execute button is pressed
    if (queueRow.peek() !== undefined && max_zombieEnergy > 0) {
        let nextRow = queueRow.peek();
        let nextCol = queueCol.peek();
        moveZombieTo(nextRow, nextCol);
    } else {
        alert('No more moves possible!');
    }
}

function moveZombieTo(row, col) {
    // Logic to visually move the zombie to the new position
    // Update the zombie's current position
    zombieRow = row;
    zombieCol = col;
    solve(zombieRow, zombieCol);
}

function cek(){
    let nextRow = queueRow.peek();
        let nextCol = queueCol.peek();
    alert(nextRow );
}

// Add any additional functions or logic as needed
