module.exports = function check(str, bracketsConfig) {
	// your solution

	let array = str.split('');
	const close = {};
	bracketsConfig.forEach(el => {
		close[el[1]] = el[0]
	})

	let stack = [];

	for (let i = 0; i < array.length; i++) {
		let topElement = stack[stack.length - 1];
		let current = array[i];
		if (stack.length && topElement === close[current]) { stack.pop(); } else {
			stack.push(current);
		}
	}
	return stack.length === 0;
}

