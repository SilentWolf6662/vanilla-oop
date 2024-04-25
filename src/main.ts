import './style.scss'

import Card from './card'
import FetchDB from './fetchDB'
import Footer from './footer'
import Modal from './modal'
import Nav from './nav'
import ProjectStatus from './projectStatus'
;

(async () => {
	new FetchDB().getProjects().then(data => {
		console.log(data)
	})
	const databaseFetcher = new FetchDB()
	// Now I can use the fetched data to initialize my application
	// Now I can pass the projects data to the Card class
	const dbProjects = await databaseFetcher.getProjects()
	const app = document.querySelector('#app')
	const container = document.createElement('div')
	container.classList.add('container')
	app?.appendChild(container)
	new Nav(container, dbProjects)
	new ProjectStatus(container, dbProjects[0])
	await databaseFetcher.getTechnologies()
	const card = new Card(container, dbProjects[0], dbProjects)
	const modal = new Modal()
	modal.hideModal()
	const cardContainer = document.querySelector('.container') as HTMLElement
	new Footer(cardContainer, databaseFetcher)
	document.title = `SilentWolf Projects | ${dbProjects[0].navText}`
	card.keyboardHandler()
})()
