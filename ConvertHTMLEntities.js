/*
https://www.freecodecamp.org/challenges/convert-html-entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	let newStr = '';
	let map = {
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;',
		'&': '&amp;',
	};
	for (let i = 0; i < str.length; i++) {
		if (map[str[i]]) {
			newStr += map[str[i]];
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}
