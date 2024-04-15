import './style.scss'

import Card from './card'
import Footer from './footer'
import Modal from './modal'
import Nav from './nav'
import ProjectStatus from './projectStatus'
import data from './../assets/json/data.json'

;

(() => {
	const projects = data.projects
	const app = document.querySelector('#app')
	const container = document.createElement('div')
	container.classList.add('container')
	app?.appendChild(container)
	new Nav(container, projects)
	new ProjectStatus(container, projects[2])
	new Card(container, projects[2], projects)
	const modal = new Modal()
	modal.hideModal()
	const cardContainer = document.querySelector('.container') as HTMLElement

	new Footer(cardContainer)
})()
