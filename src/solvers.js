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
  var solution = new makeEmptyMatrix(n); //fixme

    var arrPosition=[];//create an array with n elements
    //arrPosition shuold be [0,1,2,3,4,5....n-1]
    for (var k = 0; k < n; k++) {
      arrPosition.push(k);
    }
    var j = 0
    for(var i=n; i > 0; i--) {
      var rookPos = arrPosition[Math.floor(Math.random() * i)];
       
       
      solution[rookPos][j] = 1;    //pushes random position in incrementing rows with each loop
      arrPosition.splice(arrPosition.indexOf(rookPos),1); //finds position of rookPos in arrPosition array, then splice it out
      j++;
    }
    console.log("solu", solution);

    
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
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
