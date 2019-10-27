
/**
 * https://leetcode.com/problems/available-captures-for-rook/
 * 
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

Example 1:
Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.

 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
	let rookPos = [null, null] // [y, x];
	let canCapture = 0;

	for (let y = 0; y < board.length; y++) {
		let rookIndex = board[y].indexOf("R");
		if (rookIndex > -1) {
			rookPos = [y, rookIndex];
			break;
		}
	}

	let [rookY, rookX] = rookPos;

	for (let x = rookX + 1; x < board[rookY].length; x++) {
		if (board[rookY][x] !== ".") {
			if (board[rookY][x] === "p") {
				canCapture++;
				break;
			} else {
				break;
			}
		}
	}

	for (let x = rookX - 1; x > -1; x--) {
		if (board[rookY][x] !== ".") {
			if (board[rookY][x] === "p") {
				canCapture++;
				break;
			} else {
				break;
			}
		}
	}

	for (let y = rookY + 1; y < board.length; y++) {
		if (board[y][rookX] !== ".") {
			if (board[y][rookX] === "p") {
				canCapture++;
				break;
			} else {
				break;
			}
		}
	}

	for (let y = rookY - 1; y > -1; y--) {
		if (board[y][rookX] !== ".") {
			if (board[y][rookX] === "p") {
				canCapture++;
				break;
			} else {
				break;
			}
		}
	}

	return canCapture;
};
