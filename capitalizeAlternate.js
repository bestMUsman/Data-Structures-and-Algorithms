function capitalizeAlternate(str) {
	let newStr = "";
	let shouldCapitalize = true;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			newStr += " ";
			shouldCapitalize = true;
		} else {
			newStr += shouldCapitalize ? str[i].toUpperCase() : str[i].toLowerCase();
			shouldCapitalize = !shouldCapitalize;
		}
	}

	console.log(newStr);
	return newStr;
}

console.log(capitalizeAlternate(' HEllo world') === ' HeLlO WoRlD')
console.log(capitalizeAlternate('theRE are 2wo options') === 'ThErE ArE 2wO OpTiOnS')
