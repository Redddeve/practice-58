//Створи функцію, яка приймає рядок і повертає новий рядок, у якому всі слова з великої літери записані в оберненому порядку.

const str = 'Hello World, we learn React together!' // 'olleH '

const reverseStr = str => {
	const arr = str.split(' ')
	console.log(arr)
	const reverseArr = arr.map(el => {
		if (el[0] === el[0].toUpperCase()) {
			return el.split('').reverse().join('')
		} else {
			return el
		}
	})
	return reverseArr.join(' ')
}
console.log(reverseStr(str))
