// Створи функцію, яка приймає масив
// об'єктів та повертає новий масив
// ,який містить тільки ті об'єкти
// з вхідного масиву, які мають властивість age
// більшу або дорівнює заданому значенню.

const arr = [
	{ name: 'Alex', age: 22 },
	{ name: 'Stepan', age: 72 },
	{ name: 'Andre', age: 12 },
	{ name: 'Oleh', age: 32 },
	{ name: 'Olya', age: 19 },
]

const func = (arr, age) => {
	const newArr = arr.filter(obj => obj.age >= age)
	return newArr
}

console.log(func(arr, 15))
