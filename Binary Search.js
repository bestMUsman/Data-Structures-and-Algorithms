function binary_Search(arr, targetValue) {
	let minIndex = 0, maxIndex = arr.length - 1, middleIndex = Math.floor((maxIndex + minIndex) / 2);
	while (minIndex <= maxIndex) {
		if (arr[middleIndex] === targetValue) return middleIndex;
		if (targetValue < arr[middleIndex]) {
			maxIndex = middleIndex - 1;
		} else if (targetValue > arr[middleIndex]) {
			minIndex = middleIndex + 1;
		}
		middleIndex = Math.floor((maxIndex + minIndex) / 2);
	}
	return false;
}

let items = [1, 4, 10, 15, 20, 40, 150, 200];

binary_Search(items, 150);
