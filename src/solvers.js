/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/
*/
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting
// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// var matrixXx = [
//       [0, 1, 0, 0],
//       [0, 0, 1, 0],
//       [0, 0, 0, 1],
//       [0, 0, 0, 0]
//     ];
// var board = new Board(matrixXx);
// console.log("board", board,"board.hasAnyMajorDiagonalConflicts()",board.hasAnyMajorDiagonalConflicts())
window.findNRooksSolution = function(n) {
  var solution = new makeEmptyMatrix(n); //makes an empty array
    var arrPosition=[];//create an array with n elements
    for (var k = 0; k < n; k++) {    //arrPosition shuold be [0,1,2,3,4,5....n-1]
      arrPosition.push(k);
    }
    var j = 0;
    for(var i=n; i > 0; i--) {
      var rookPos = arrPosition[Math.floor(Math.random() * i)];//check random position
      solution[rookPos][j] = 1;    //pushes random position in incrementing rows with each loop
      arrPosition.splice(arrPosition.indexOf(rookPos),1); //finds position of rookPos in arrPosition array, then splice it out
      j++;
    }
    // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
};

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixme
      // rook solution, is the same as number as this.attributes.n   i.e. 5x5 grid contains 5 total. 
  for(var i=n; i > 0; i--) {
    solutionCount *= i; 
  }
  if (n === 0) {
    solutionCount = 0;
  }
  //  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
window.findSolution = function(row, n, board, validator, callback) {
  //if all rows exhausted
  if (row === n) {
    return callback();
  }
  //iterate over possible decisions
  for (var i = 0; i < n; i++) {
    //place a piece
    board.togglePiece(row, i);
    //recurse into remaining problem
    if (!board[validator]()) {
      var result = findSolution(row + 1, n, board, validator, callback);
      if (result) {
        return result; //eject
      }
    }
    // unplace a piece
    board.togglePiece(row, i);
  }
};
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
//One attempted Solution
  /*var holdingN =n;
  // if (n == 0) {
  //   return [];
  // }
  var board = new Board({n:n});
  var solution = findSolution(0,n,board, "hasAnyQueensConflicts", function(){
    return _.map(board.rows(), function(row) {
      debugger;
      return row.slice();
    });
  }) || board.rows();
  console.log("Single solution for " + n + 'queens:' + JSON.stringify(solution));
// if( n=== 0 || n === 2 || n === 3) {
//   solution = [[0]];
// }
  console.log("n in findNQueensSolution", n);
  if (n === 2 || n === 3) {
    solution = []; 
  }
  return solution;*/
//ENDED ATTEMPTED SOLUTION; 
//     var arrPosition=[];//create an array with n elements
//     //arrPosition shuold be [0,1,2,3,4,5....n-1]
//     for (var k = 0; k < n; k++) {
//       arrPosition.push(k);
//     }
//     var j = 0
//     for(var i=n; i > 0; i--) {
//       var rookPos = arrPosition[Math.floor(Math.random() * i)];
//       solution.attributes[rookPos][j] = 1;    //pushes random position in incrementing rows with each loop
//       if (solution.hasAnyMajorDiagonalConflicts() || solution.hasAnyMinorDiagonalConflicts() || solution.hasAnyColConflicts() || solution.hasAnyRowConflicts()) {
//         // debugger
//         solution.attributes[rookPos][j] = 0;
//         i++;
//       } else {
//         // debugger;
//         arrPosition.splice(arrPosition.indexOf(rookPos),1); //finds position of rookPos in arrPosition array, then splice it out
//       }
//       j++;
//      // debugger
//       if (j === n - 1) {
//        // debugger;
//         j = 0; 
//       }
//     }
//   if (n === 0) {
//      // solution.attributes = [[2,3],[1,2]];
//     return [];
//   // }else if (n === 1) {
//   //   solution.attributes[0][0] = 1;
//   //   console.log("solution.attributes as shown in the solvers spec",solution.attributes);
//   //   return solution.attributes;
//    }
// //debugger;
//   // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   console.log("solution.attributes from solvers file", solution.attributes);
//   return solution.attributes;
};
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
