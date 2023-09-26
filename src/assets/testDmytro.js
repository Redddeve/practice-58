const plndr = str => {
	const plndrArr = []
	str.split(' ').filter(el => {
		if (el.toLowerCase().split('').reverse().join('') === el.toLowerCase()) {
			return plndrArr.push(el)
		}
	})

	return plndrArr.join(' ')
}

console.log(plndr('level top ror'))
