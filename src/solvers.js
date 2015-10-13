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

window.findNRooksSolution = function(n) {
  var solution = []; //fixme

    var row = [];
    var arrPosition=[];//create an array with n elements
    for(var i=0; i<n; i++){
      arrPosition.push(i);
      row.push(0);
    }

    for (var q = 0, q < n; q++) {
    solution.push(row.slice());
    }
    //arrPosition shuold be [0,1,2,3,4,5....n-1]

    for(var i=n, var j=0; i<0; i--, j++) {
      var rookPos = arrPosition[Math.floor(Math.random() * i)]; 
      solution[rookPos][j] = 1;    //pushes random position in incrementing rows with each loop
      arrPosition.splice(arrPosition.indexOf(rookPos),1); //finds position of rookPos in arrPosition array, then splice it out
    }


    return solution;

    //determine what format the solution should be
    //could possibly be object instead of array?


}
  






























  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

      // rook solution, is the same as number as this.attributes.n   i.e. 5x5 grid contains 5 total. 
      // 
  var solutionCount = undefined; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
