import React from 'react'
// import {} from ""

export const FilterTodo = ({ takeData, filterValue }) => {
	return (
		<>
			<input onChange={takeData} value={filterValue} type='text' />
		</>
	)
}
