import { ProjectElement } from './types/types'
import gsap from 'gsap'

export default class Card {
	statusPosition: DOMRect
	constructor(
		private container: HTMLElement,
		private project: ProjectElement,
		private projects: ProjectElement[]
	) {
		this.inistialize()
		this.statusPosition = document
			.querySelector('.status')
			?.getBoundingClientRect() as DOMRect
	}

	inistialize() {
		const card = this.createCard()
		this.createImage(card)
		this.createText(card)
		this.addClickEvents()
	}

	createCard(): HTMLElement {
		const card = document.createElement('div')
		card.classList.add('card')
		this.container.appendChild(card)
		return card
	}

	createImage(card: HTMLElement) {
		const imageContainer = document.createElement('figure')
		imageContainer.classList.add('image')
		card.appendChild(imageContainer)

		const image = document.createElement('img')
		image.src = this.project.imageSrc
		image.alt = this.project.name
		imageContainer.appendChild(image)
	}

	createText(card: HTMLElement) {
		const text = document.createElement('div')
		text.classList.add('content')
		card.appendChild(text)
		this.createTitle(text)
		this.createDescription(text)
		const container = document.querySelector('.container') as HTMLElement
		this.createTechnologies(container)

		const links = document.createElement('ul')
		links.classList.add('links')

		this.createRepositoryLink(links)
		this.createLiveLink(links)

		container.appendChild(links)
	}

	createTitle(text: HTMLElement) {
		const title = document.createElement('h2')
		title.textContent = this.project.name
		text.appendChild(title)
	}

	createDescription(text: HTMLElement) {
		const description = document.createElement('p')
		description.textContent = this.project.description
		text.appendChild(description)
	}

	createTechnologies(container: HTMLElement) {
		const technologies = document.createElement('ul')
		technologies.classList.add('technologies')
		container.appendChild(technologies)
		this.project.technologies.forEach(technology => {
			const li = document.createElement('li')
			li.textContent = technology
			technologies.appendChild(li)
		})
	}

	createRepositoryLink(container: HTMLElement) {
		const repositoryLink = document.createElement('a')

		if (this.project.liveLink) {
			repositoryLink.href = this.project.repositoryLink
			repositoryLink.textContent = 'Repository'
		} else {
			repositoryLink.href = '#NoRepository'
			repositoryLink.textContent = 'No Repository Available'
		}
		container.appendChild(repositoryLink)
	}

	createLiveLink(container: HTMLElement) {
		const liveLink = document.createElement('a')
		liveLink.textContent = 'Live'
		if (this.project.liveLink) {
			liveLink.href = this.project.liveLink
			liveLink.textContent = 'Live Link'
		} else {
			liveLink.href = '#NotLive'
			liveLink.textContent = 'No Live Link Available'
		}
		container.appendChild(liveLink)
	}

	changeContent(index: number) {
		const card = this.container.querySelector('.card')
		const imageContainer = card?.querySelector('.image')
		const image = card?.querySelector('img')
		const text = card?.querySelector('.content')
		const title = text?.querySelector('h2')
		const description = text?.querySelector('p')
		const technologies = document.querySelector('.technologies')
		const status = document.querySelector('.status')
		const content = this.projects[index]
		this.statusPosition = status?.getBoundingClientRect() as DOMRect

		const links = document.querySelector('.links')

		if (links) {
			const linksTimeline = gsap.timeline()

			linksTimeline.to(links, {
				duration: 0.5,
				opacity: 0,
				ease: 'circ.inOut',
				onComplete: () => {
					const repoLink = content.repositoryLink
					const liveLink = content.liveLink

					const repo = links?.querySelectorAll('a')[0]
					const live = links?.querySelectorAll('a')[1]

					if (repoLink) {
						repo.href = repoLink
						repo.textContent = 'Repository'
					} else {
						repo.href = '#NoRepository'
						repo.textContent = 'No Repository Available'
					}

					if (liveLink) {
						live.href = liveLink
						live.textContent = 'Live Link'
					} else {
						live.href = '#NotLive'
						live.textContent = 'No Live Link Available'
					}
				}
			})

			linksTimeline.to(links, {
				duration: 0.5,
				opacity: 1,
				ease: 'circ.inOut'
			})
		}

		const statusTimeline = gsap.timeline()

		if (status) {
			statusTimeline.to(status, {
				duration: 0.25,
				opacity: 0,
				ease: 'circ.inOut',
				onComplete: () => {
					status.textContent = content.status
				}
			})
		}

		if (text && title && description) {
			const contentTimeline = gsap.timeline()

			contentTimeline.to(text, {
				duration: 0.5,
				x: 100,
				opacity: 0,
				ease: 'circ.inOut',
				onComplete: () => {
					title.textContent = content.name
					description.textContent = content.description
				}
			})

			contentTimeline.to(text, {
				duration: 0.5,
				x: 0,
				opacity: 1,
				ease: 'circ.inOut',
				onComplete: () => {
					if (!status) return

					statusTimeline.to(status, {
						duration: 0.3,
						opacity: 1,
						ease: 'circ.inOut'
					})
				}
			})
		}

		if (imageContainer && image) {
			const imageTimeline = gsap.timeline()

			imageTimeline.to(imageContainer, {
				duration: 0.5,
				x: -100,
				opacity: 0,
				ease: 'circ.inOut',
				onComplete: () => {
					image.src = content.imageSrc
				}
			})
			imageTimeline.to(imageContainer, {
				duration: 0.5,
				x: 0,
				opacity: 1,
				ease: 'circ.inOut'
			})
		}

		if (technologies) {
			const techTimeline = gsap.timeline()

			techTimeline.to(technologies, {
				duration: 0.5,
				opacity: 0,
				ease: 'circ.inOut',
				onComplete: () => {
					const technologiesList = content.technologies
					technologies.innerHTML = ''
					technologiesList.forEach(technology => {
						const li = document.createElement('li')
						li.textContent = technology
						technologies.appendChild(li)
					})
				}
			})

			techTimeline.to(technologies, {
				duration: 0.5,
				opacity: 1,
				ease: 'circ.inOut'
			})
		}
	}

	addClickEvents() {
		const tabs = document.querySelectorAll('.tab')
		tabs.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				this.changeContent(index)
				console.log('clicked tab index:', index)
			})
		})
	}
}
