import React from 'react'

const AddTodo = props => {
	const { inputDataChanger, inputData, addTodo } = props
	return (
		<>
			<input onChange={inputDataChanger} value={inputData} type='text' />
			<button onClick={addTodo}>Add todo</button>
		</>
	)
}

export default AddTodo
