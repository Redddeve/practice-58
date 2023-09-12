import React from 'react'

class Filter extends React.Component {
	render() {
		const { btns } = this.props
		return (
			<div>
				{btns.map(btn => (
					<button key={btn} onClick={() => this.props.ChancheActive(btn)}>
						{btn}
					</button>
				))}
			</div>
		)
	}
}

export default Filter
