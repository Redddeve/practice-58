//Створи функцію, яка приймає масив чисел та повертає новий масив,
//в якому кожен елемент є квадратом відповідного елемента вхідного масиву.
const arr = [2, 4, 1, 22, 33, 5]
const newArr = num => {
	return arr.map((number, index) => (index % 2 === 0 ? number * number : 'React'))
}

console.log(newArr(arr))
