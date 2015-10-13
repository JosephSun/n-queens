// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
      var count = 0; 
      for (var i = 0; i < this.attributes.n; i++) {
        if (this.attributes[rowIndex][i] === 1) {
          count++;
        }
       if (count > 1) {
        return true;
       } 
      }
      return false; // fixme
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      for (var property in this.attributes) {
        var amountOfPieces = 0;

        if (Array.isArray(this.attributes[property])) {
          for (var i = 0; i < this.attributes[property].length; i++){
            amountOfPieces = amountOfPieces + this.attributes[property][i];
          }

          if (amountOfPieces > 1) {
            return true;     
          }
        }
      }      
      return false; 
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      var count = 0; 
      for (var i = 0; i < this.attributes.n; i++) {
        if (this.attributes[i][colIndex] === 1) {
          count++;
        }
       if (count > 1) {
        return true;
       } 
      }
      return false; // fixme
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      for(var i = 0; i < this.attributes.n; i++ ){

        var countMyBlessings = 0;

        if (Array.isArray(this.attributes[i])) {
          for(var j = 0; j < this.attributes.n; j++){
            if(this.attributes[j][i] === 1){
              countMyBlessings++;
            }
          }
        if(countMyBlessings>1) {
          return true;
        }

        }
    }
      return false; // fixme
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      var count = 0;
      var numOfPieces = 0;
      if (majorDiagonalColumnIndexAtFirstRow >= 0) {
        for (var row = 0; row < 1; row++) {
          for (var column = majorDiagonalColumnIndexAtFirstRow; column < this.attributes.n; column++) {
            if (this.attributes[row + count][column] === 1) {
              numOfPieces++;
            }
            count++;
          }
        }
      }
      return;
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      for (row = 0; row < this.attributes.n - 1; row++) {
        var numOfPieces = 0;
        var count = 0; 
        for (column = 0; column < this.attributes.n - row; column++) {
          if (this.attributes[row + count][column] === 1) {
            numOfPieces++;
          }
          count++;
        }
        if (numOfPieces > 1) {
          return true;
        }
      }
      //first for loop closes


      for (column = 0; column < this.attributes.n - 1; column++) {
        var numOfPieces = 0;
        var count = 0; 
        for (row = 0; row < this.attributes.n - column; row++) {
          if (this.attributes[row][column + count] === 1) {
            numOfPieces++;
          }
          count++;
        }
        if (numOfPieces > 1) {
          return true;
        }
      }//second for loop closes
      




      //first for loop closes
      return false;
    },



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      
      return hasMinorDiagonalConflictAt(); // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      for (var row = 0; row < this.attributes.n - 1; row++) {
        var numOfPieces = 0;
        var count = 0; 
        for (var column = this.attributes.n - 1; column >= 1; column--) {
          if (count - row >= 0) {
            if (this.attributes[count - row][column /*- row*/] === 1) {
              numOfPieces++;
            }
          }
          if (numOfPieces > 1) {
            return true;
          }
          count++;
          
            
        }
      }
      for (var row = 0; row + 1  < this.attributes.n  ; row++) {
        var numOfPieces = 0;
        var count = 0; 
        ;
        for (var column = this.attributes.n - 1; column >= 1; column--) {
          
          if (count + row < this.attributes.n) {
            ;
            if (this.attributes[count + row][column/*- row*/] === 1) {
              ;
              numOfPieces++;
            }
    
            if (numOfPieces > 1) {
              return true;
            }
            ;
            count++;
            
            
          }
            
        }
      }




      return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
