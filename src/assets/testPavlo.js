//Створи функцію, яка приймає два аргументи - рядок та символ, і повертає кількість входжень цього символу в рядок.
// const str = 'Hello from react!'
// const el = 'o'

// const func = (str, el) => {
// 	return str.split('').filter(item => item === el).length
// }

// console.log(func(str, el))

// ==============================================
// const funcArr = (arr, num) => arr.filter(item => item.age >= num)

// ============================================
// Створи функцію, яка приймає рядок і повертає новий рядок, у якому перша літера кожного слова замінена на велику.

const str = 'hello from react!'
const func = str => {
	let arr = str.split(' ')
	for (const word of arr) {
		word[0] = word[0].UpperCase()
	}
	return
}
