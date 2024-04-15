export default class Footer {
	constructor(private container: HTMLElement) {
		this.initialize()
	}

	initialize() {
		const footer = this.createFooter()
		this.createText(footer)
	}

	createFooter(): HTMLElement {
		const footer = document.createElement('footer')
		footer.classList.add('footer')
		this.container.appendChild(footer)
		return footer
	}

	createText(footer: HTMLElement) {
		const text = document.createElement('p')
		const name = document.createElement('span')
		const reserved = document.createElement('span')

        text.classList.add('copyright')
		name.classList.add('name')
        reserved.classList.add('reserved')

		reserved.textContent = '. All rights reserved.'
		name.textContent = 'Mathias Drægert Mose Andersen / SilentWolf'
		text.textContent = '© ' + new Date().getFullYear() + " "

		text.appendChild(name)
		text.appendChild(reserved)

        footer.appendChild(text)

        name.addEventListener('click', () => {
            window.open('https://github.com/SilentWolf6662', '_blank')
        })
	}
}
