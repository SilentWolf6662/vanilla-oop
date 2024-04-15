import { ProjectElement } from "./types/types"

export default class Modal {
	card: HTMLElement
	image: HTMLElement = document.querySelector('.image') as HTMLElement
	project: ProjectElement
	constructor(project: ProjectElement) {
		this.card = document.querySelector('.card') as HTMLElement
		this.project = project
		this.initialize()
	}

	initialize() {
		// Modal
		const modal = document.createElement('div')
		modal.id = 'imageModal'
		modal.classList.add('modal')
		this.card.appendChild(modal)

		// Modal Content
		const modalContent = document.createElement('div')

		modalContent.classList.add('modalContent')
		modal.appendChild(modalContent)

		// Close Button
		const close = document.createElement('button')
		close.classList.add('close')
		close.textContent = 'x'
		modalContent.appendChild(close)

		// Modal Caption
		const caption = document.createElement('div')
		caption.classList.add('caption')
		modalContent.appendChild(caption)

		// Image
		const img = document.createElement('img')
		img.classList.add('image')
		modalContent.appendChild(img)

		// Event Listener
		this.image.addEventListener('click', () => {
			this.showModal()
			img.src = this.project.imageSrc
			caption.textContent = this.project.name
		})

		close.addEventListener('click', () => {
			this.hideModal()
		})

		window.addEventListener('click', event => {
			if (event.target === modal) {
				this.hideModal()
			}
		})

		window.addEventListener('keydown', event => {
			if (event.key === 'Escape') {
				this.hideModal()
			}
		})
	}

	showModal() {
		const modal = document.querySelector('.modal') as HTMLElement
		modal.style.display = 'block'
	}

	hideModal() {
		const modal = document.querySelector('.modal') as HTMLElement
		modal.style.display = 'none'
	}

	changeModalContent(project: ProjectElement) {
		this.project = project
	}
}