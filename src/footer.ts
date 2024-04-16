import data from './../assets/json/data.json'

export default class Footer {
	constructor(private container: HTMLElement) {
		this.initialize()
	}

	initialize() {
		const footer = this.createFooter()
		this.createText(footer)
	}

	createFooter(): HTMLElement {
		const table = generateTable()
		table.classList.add('contact')
		this.container.appendChild(table)

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
		text.textContent = '© ' + new Date().getFullYear() + ' '

		text.appendChild(name)
		text.appendChild(reserved)

		footer.appendChild(text)

		name.addEventListener('click', () => {
			window.open('https://github.com/SilentWolf6662', '_blank')
		})
	}
}

function generateTable() {
	const table = document.createElement('table')
	const tableHead = document.createElement('thead')
	const tableRow = document.createElement('tr')
	const tableHeader = document.createElement('th')

	table.appendChild(tableHead)
	tableHead.appendChild(tableRow)
	tableRow.appendChild(tableHeader)

	tableHeader.textContent = 'Contact me on:'

	const tableBody = document.createElement('tbody')
	table.appendChild(tableBody)

	const contact = data.contact // Assuming `data` is your JSON object
	Object.entries(contact).forEach(([key, value]) => {
		const tableRow = document.createElement('tr')
		const tableData = document.createElement('td')
		const tableDataValue = document.createElement('td')

		tableDataValue.classList.add('link')
		tableData.textContent = `${key}:` // Use template literals for readability
		tableDataValue.textContent = value

		if (key === 'Email') {
			tableDataValue.addEventListener('click', () => {
				window.open(`mailto:${value}`, '_blank')
			})
		} else if (key === 'Phone') {
			tableDataValue.addEventListener('click', () => {
				window.open(`tel:${value}`, '_blank')
			})
		} else if (key === 'Linkedin') {
			tableDataValue.addEventListener('click', () => {
				window.open(`https://www.linkedin.com/in/${value}`, '_blank')
			})
		} else if (key === 'Discord') {
			tableDataValue.addEventListener('click', () => {
				window.open(`https://discord.gg/HtZyv6Mc`, '_blank')
			})
		} else if (key === 'Github') {
			tableDataValue.addEventListener('click', () => {
				window.open(`https://github.com/SilentWolf6662`, '_blank')
			})
		} else {
			tableDataValue.addEventListener('click', () => {
				window.open(value, '_blank')
			})
		}

		tableRow.appendChild(tableData) // Append the tableData to the tableRow before the tableBody
		tableRow.appendChild(tableDataValue) // Now append the tableDataValue to the tableRow
		tableBody.appendChild(tableRow) // Now append the tableRow to the tableBody
	})

	return table
}
