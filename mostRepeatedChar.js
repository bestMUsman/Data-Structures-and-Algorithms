// Return the most repeated character, and if two characters appear the same time then return either one

function mostRepeatedChar(str) {
	let maxCount = 0,
		name = '',
		map = {};
	for (let key in str) {
		map[str[key]] = map[str[key]] + 1 || 1;
		if (map[str[key]] > maxCount) {
			maxCount = map[str[key]];
			name = str[key];
		}
	}
	return name;
}

mostRepeatedChar('tomorrrow');
