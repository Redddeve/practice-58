// Поліндром
const str = 'level'

// const palindromFn = str => {
// 	const reverse = str.split('').reverse().join('')
// 	return reverse === str

// 	// if (reverse === str) {
// 	// 	return true
// 	// } else {
// 	// 	return false
// 	// }
// }
const palindromFn = str => str.split('').reverse().join('') === str

console.log(palindromFn(str))
