import './style.scss'

import Card from './card'
import Footer from './footer'
import Modal from './modal'
import Nav from './nav'
import ProjectStatus from './projectStatus'

// Assuming your JSON file is located at './data.json'
const fetchData = async () => {
	try {
		const response = await fetch('./../assets/json/data.json')
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('There was a problem with your fetch operation:', error)
	}
}

;(() => {
	fetchData().then(data => {
		// Now I can use the fetched data to initialize my application
		// Now I can pass the projects data to the Card class
		const projects = data.projects
		const app = document.querySelector('#app')
		const container = document.createElement('div')
		container.classList.add('container')
		app?.appendChild(container)
		new Nav(container, projects)
		new ProjectStatus(container, projects[0])
		const card = new Card(container, projects[0], projects)
		const modal = new Modal()
		modal.hideModal()
		const cardContainer = document.querySelector(
			'.container'
		) as HTMLElement
		new Footer(cardContainer)
		document.title = `SilentWolf Projects | ${projects[0].navText}`
		card.keyboardHandler()
	})
})()
