import './style.scss'

import Card from './card'
import FetchDB from './fetchDB'
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
	new FetchDB().getProjects().then(data => {
		console.log(data)
	})
	// Fetch the data
	fetchData().then(async data => {
		const databaseFetcher = new FetchDB()
		// Now I can use the fetched data to initialize my application
		// Now I can pass the projects data to the Card class
		const projects = data.projects
		const dbProjects = await databaseFetcher.getProjects()
		const app = document.querySelector('#app')
		const container = document.createElement('div')
		container.classList.add('container')
		app?.appendChild(container)
		new Nav(container, dbProjects)
		new ProjectStatus(container, projects[0])
		const technologies = await databaseFetcher.getTechnologies()
		console.log(technologies)
		const card = new Card(container, projects[0], dbProjects, technologies)
		const modal = new Modal()
		modal.hideModal()
		const cardContainer = document.querySelector(
			'.container'
		) as HTMLElement
		new Footer(cardContainer, databaseFetcher)
		document.title = `SilentWolf Projects | ${projects[0].navText}`
		card.keyboardHandler()
	})
})()
