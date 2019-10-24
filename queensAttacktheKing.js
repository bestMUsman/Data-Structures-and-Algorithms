/**
https://leetcode.com/problems/queens-that-can-attack-the-king/

Example 1:
Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation:  
The queen at [0,1] can attack the king cause they're in the same row. 
The queen at [1,0] can attack the king cause they're in the same column. 
The queen at [3,3] can attack the king cause they're in the same diagnal. 
The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1]. 
The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0]. 
The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.

 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
 
var queensAttacktheKing = function (queens, king) {
  let [kingY, kingX] = king;

  let kingUp = [null, null];
  let kingDown = [null, null];
  let kingLeft = [null, null];
  let kingRight = [null, null];

  let kingLeftUp = [null, null];
  let kingRightDown = [null, null];

  let kingLeftDown = [null, null];
  let kingRightUp = [null, null];

  queens.forEach(([queenY, queenX]) => {
    if ((queenX == kingX)) { // it means queen and king are on same Y-axis 
      if (queenY < kingY) {
        if (queenY > kingUp[0] || kingUp[0] == null) {
          kingUp = [queenY, queenX];
        }
      } else if (queenY > kingY) {
        if (queenY < kingDown[0] || kingDown[0] == null) {
          kingDown = [queenY, queenX];
        }
      }
    } else if ((queenY == kingY)) { // it means queen and king are on same X-axis 
      if (queenX < kingX) {
        if (queenX > kingLeft[1] || kingLeft[1] == null) {
          kingLeft = [queenY, queenX];
        }
      } else if (queenX > kingX) {
        if (queenX < kingRight[1] || kingRight[1] == null) {
          kingRight = [queenY, queenX];
        }
      }
    } else if ((queenY - queenX) === (kingY - kingX)) { // it means queen and king are on same diagonal-axis from 'left-top' to 'bottom-right' (aka diagonal line with 'negative' slope)
      if (queenY < kingY) {
        if (queenY > kingLeftUp[0] || kingLeftUp[0] == null) {
          kingLeftUp = [queenY, queenX];
        }
      } else if (queenY > kingY) {
        if (queenY < kingRightDown[0] || kingRightDown[0] == null) {
          kingRightDown = [queenY, queenX];
        }
      }
    } else if ((queenY + queenX) === (kingY + kingX)) { // it means queen and king are on same diagonal-axis from 'left-bottom' to 'top-right' (aka diagonal line with 'positive' slope)
      if (queenY < kingY) {
        if (queenY > kingRightUp[0] || kingRightUp[0] == null) {
          kingRightUp = [queenY, queenX];
        }
      } else if (queenY > kingY) {
        if (queenY < kingLeftDown[0] || kingLeftDown[0] == null) {
          kingLeftDown = [queenY, queenX];
        }
      }
    }

  });

  console.log('kingUp', kingUp)
  console.log('kingDown', kingDown)
  console.log('kingLeft', kingLeft)
  console.log('kingRight', kingRight)
  console.log('kingLeftUp', kingLeftUp)
  console.log('kingRightDown', kingRightDown)
  console.log('kingRightUp', kingRightUp)
  console.log('kingLeftDown', kingLeftDown)


  return [kingUp, kingDown, kingLeft, kingRight, kingLeftUp, kingRightDown, kingRightUp, kingLeftDown].filter(item => item[0] !== null);
};
