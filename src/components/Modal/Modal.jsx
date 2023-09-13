import { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
	onBackDropClick = e => {
		if (e.currentTarget === e.target) {
			this.props.close()
		}
	}

	render() {
		return (
			<ModalWrapper onClick={this.onBackDropClick}>
				<ModalContent>
					<>
						<h1>{this.props.title}</h1>
						<hr />
					</>
					<CloseButton onClick={this.props.close}>×</CloseButton>
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal
