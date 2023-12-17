class Cell {
    constructor(x, y, dist, prev) {
        this.x = x;
        this.y = y;
        this.dist = dist;
        this.prev = prev;
    }
    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}

class ShortestPathBetweenCellsBFS {
    shortestPath(matrix, start, end) {
        var sx = start[0];
        var sy = start[1];
        var dx = end[0];
        var dy = end[1];
        // if start or end value is 0, return
        if (matrix[sx][sy] === 0 || matrix[dx][dy] === 0) {
            console.log("There is no path.");
            return;
        }
        // initialize the cells
        var m = matrix.length;
        var n = matrix[0].length;
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

            console.log("Shortest path: ");
            path.forEach(cell => console.log(cell.toString()));
        }
    }

    visit(cells, queue, x, y, parent) {
        if (x < 0 || x >= cells.length || y < 0 || y >= cells[0].length || matrix[x][y] === 0) {
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

// Use the matrix and start/end points as before


const matrix = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,1],
    [1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1]];

let myObj = new ShortestPathBetweenCellsBFS();  
let start = [0, 2];
let end = [6,6];
console.log("case 1: ");
myObj.shortestPath(matrix, start, end);
