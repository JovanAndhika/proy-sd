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

var arrYPosition = [-1, 1]
var arrxPosition = [-1, 1];

function startGame(){
var x_position = 4;
var y_position = 4;
var zombie_position = graphMatrix[x_position][y_position];
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
  const randomYIndex = Math.floor(Math.random() * arrYPosition.length);
  const randomXIndex = Math.floor(Math.random() * arrxPosition.length);
  
  const itemy = arrYPosition[randomYIndex];
  const itemx = arrxPosition[randomXIndex];

  console.log(itemy);
}


