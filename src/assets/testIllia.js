//Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.

const arr = [1, 3, 5, 7] // 4
const arr2 = [1, 3] // 2

const fnAvr = array => {
	let sum = 0
	for (const item of array) {
		sum += item
	}
	const result = sum / array.length
	return result
}

const fnAvrReducer = array => {
	const total = (array.reduce = ((acc, current) => acc + current, 0))
	const result = total / array.length
}

fnAvrReducer(arr)
