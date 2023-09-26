//Створи функцію, яка приймає масив об'єктів з властивістю price та повертає найбільшу ціну з цих об'єктів.

//Створи функцію, яка приймає масив об'єктів з властивістю price та повертає найбільшу ціну з цих об'єктів.
const arr = [
	{ price: 11, title: 'Apple' },
	{ price: 111, title: 'Carrot' },
	{ price: 131, title: 'Cabbage' },
	{ price: 41, title: 'Egg' },
	{ price: 71, title: 'Potato' },
]

function getMaxPrice(arr) {
	// const newArr = []
	// for (let i = 0; i < arr.length; i++) {
	// 	newArr.push(arr[i].price)
	// }
	const newArr = arr.map(item => item.price)
	console.log(newArr)
	console.log(Math.max(...newArr))
}

console.log(getMaxPrice(arr))
