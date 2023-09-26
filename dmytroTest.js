//Створи функцію, яка приймає масив об'єктів з властивістю name та повертає новий масив, який містить тільки ті об'єкти, в яких ім'я починається з певної літери.

const arr = [
	{ name: 'Anton' },
	{ name: 'Alina' },
	{ name: 'Stepan' },
	{ name: 'Darina' },
	{ name: 'Sergey' },
	{ name: 'Dmytro' },
	{ name: 'Katerina' },
	{ name: 'Diana' },
	{ name: 'Arsen' },
	{ name: 'Uliya' },
	{ name: 'Vitaliy' },
]
function newArr(arr, letter) {
	const filterArr = arr.filter(({ name }) => name.toLowerCase()[0] === letter.toLowerCase())
	return filterArr.length > 0 ? filterArr : `There is noone with name that starts with ${letter}`
}

console.log(newArr(arr, 'K'))
