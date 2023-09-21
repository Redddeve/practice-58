import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)
	const toggle = item => {
		setIsOpen(prev => !prev)
		setContent(item)
	}
	return { open, close, toggle, isOpen, content }
}
