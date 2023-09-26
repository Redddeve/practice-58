// Створи функцію, яка приймає рядок і повертає новий рядок, у якому всі слова з великої літери записані в оберненому порядку.

const str = 'Hello my dear Friend to React course!' // 'olleH my dear dneirF to React course!'
const func = str => {
	const wordArr = str.split(' ')
	return wordArr
		.map(word => {
			if (word[0] === word[0].toUpperCase()) return word.split('').reverse().join('')
			else return word
		})
		.join(' ')
}

console.log(func(str))
