//Створи функцію, яка приймає масив рядків та повертає новий масив, який містить тільки рядки, які містять підрядок "JS".
const strArr = ['Hello, js is so bad)', 'Sup!', 'React is better way', 'JS - base']

const arr = strArr => {
	const newArr = strArr.filter(item => item.toLowerCase().includes('js'))

	return newArr.map(item => item.toLowerCase().replace('js', 'React'))
}

console.log(arr(strArr))
