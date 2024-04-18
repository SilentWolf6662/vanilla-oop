export default class Modal {
	card: HTMLElement
	image: HTMLElement = document.querySelector('.image') as HTMLElement
	constructor() {
		this.card = document.querySelector('.card') as HTMLElement
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
			const titel = document.querySelector('.content h2') as HTMLElement
			const image = document.querySelector(
				'.image img'
			) as HTMLImageElement

			img.src = image.src
			caption.textContent = titel.textContent
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
		const modalImage = document.querySelector('.modal img')
		modalImage?.classList.remove('shrink')
		modalImage?.classList.add('enlarge')
		modal.style.display = 'block'
	}

	hideModal() {
		const modal = document.querySelector('.modal') as HTMLElement
		const modalImage = document.querySelector('.modal img')
		modalImage?.classList.remove('enlarge')
		modalImage?.classList.add('shrink')
		setTimeout(() => {
			modal.style.display = 'none'
		}, 500)
	}
}
