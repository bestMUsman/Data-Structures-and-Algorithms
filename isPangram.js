function isPangram(str) {
	let count = 0;
	let map = {a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true, k: true, l: true, m: true, n: true, o: true, p: true, q: true, r: true, s: true, t: true, u: true, v: true, w: true, x: true, y: true, z: true};
	for (let i = 0; i < str.length; i++) {
		if (map[str[i]]) {
			count++;
			map[str[i]] = false;
		}
	}
	if (count === 26) {
		return true;
	} else {
		return false;
	}
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.') === true);
console.log(isPangram('working.') === false);
