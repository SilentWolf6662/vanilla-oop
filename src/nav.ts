import { ProjectElement } from './types/types'

/**
 * A class for creating and managing a navigation slider with tabs and icons.
 */
export default class Nav {
	private badges: HTMLElement[] = []
	private icons: HTMLElement[] = []
	private tabs: HTMLElement | null = null

	/**
	 * Constructs a new Nav instance.
	 * @param container The container element where the navigation slider will be appended.
	 * @param projects An array of Project objects representing the tabs to be created.
	 */
	constructor(
		private container: HTMLElement,
		private projects: ProjectElement[]
	) {
		this.initialize()
	}

	/**
	 * Initializes the navigation slider by creating the slider, icons, and tabs.
	 */
	initialize() {
		const navSlider = this.createNavSlider()

		// Create left arrow icon
		const leftArrow = this.createIcon('left-arrow', '<', navSlider)
		this.icons.push(leftArrow)

		// Create tabs
		this.createTabs(navSlider)

		// Create right arrow icon
		const rightArrow = this.createIcon('right-arrow', '>', navSlider)
		this.icons.push(rightArrow)

		// Add event listeners
		this.addEventListeners()

		// Focus on the navigation slider
		navSlider.focus()

		// Update icons based on initial scroll position
		this.updateIcons(0)
	}

	/**
	 * Creates the navigation slider element and appends it to the container.
	 * @returns The created navigation slider element.
	 */
	createNavSlider(): HTMLElement {
		const navSlider = document.createElement('nav')
		navSlider.classList.add('slider')
		this.container.appendChild(navSlider)
		return navSlider
	}

	/**
	 * Creates an icon element with the specified class and text, and appends it to the navigation slider.
	 * @param arrowClass The class to apply to the icon.
	 * @param text The text to display inside the icon.
	 * @param navSlider The navigation slider element to append the icon to.
	 * @returns The created icon element.
	 */
	createIcon(
		arrowClass: string,
		text: string,
		navSlider: HTMLElement
	): HTMLElement {
		const icon = document.createElement('div')
		icon.classList.add('icon', arrowClass, 'hide')

		const arrow = document.createElement('span')
		arrow.classList.add(arrowClass)
		arrow.textContent = text

		icon.appendChild(arrow)
		navSlider.appendChild(icon)

		return arrow
	}

	/**
	 * Creates the tabs for the navigation slider based on the provided projects.
	 * @param navSlider The navigation slider element to append the tabs to.
	 */
	createTabs(navSlider: HTMLElement) {
		const tabs = document.createElement('ul')
		tabs.classList.add('tabs')
		tabs.setAttribute('role', 'tablist')
		navSlider.appendChild(tabs)

		this.tabs = tabs

		this.projects.forEach((project, index) => {
			const tab = this.createTab(project, index)
			this.badges.push(tab)
		})
	}

	/**
	 * Creates a single tab element based on the provided project and index.
	 * @param project The project object representing the tab.
	 * @param index The index of the tab.
	 * @returns The created tab element.
	 */
	createTab(project: ProjectElement, index: number): HTMLElement {
		const tab = document.createElement('li')
		tab.classList.add('tab')
		tab.setAttribute('data-index', index.toString())
		tab.textContent = project.navText
		if (index === 0) tab.classList.add('active')

		tab.setAttribute('role', 'tab')
		tab.setAttribute('aria-controls', `tab-${index}`)
		tab.setAttribute('aria-labelledby', `tab-${index}`)
		tab.setAttribute('id', `tab-${index}`)
		tab.setAttribute('tabindex', '0')

		this.tabs?.appendChild(tab)
		return tab
	}

	/**
	 * Adds event listeners to the navigation slider, icons, and tabs.
	 */
	addEventListeners() {
		if (this.tabs === null) return

		// Add click event listeners to icons
		this.icons.forEach(icon => {
			icon.addEventListener('click', () => {
				if (this.tabs === null) return
				this.tabs.style.scrollBehavior = 'smooth'
				this.tabs.scrollLeft += icon.classList.contains('right-arrow')
					? 100
					: -100
			})
		})

		// Add click event listeners to tabs
		this.badges.forEach(badge => {
			badge.addEventListener('click', () => {
				this.activateTab(badge)
			})
		})

		// Add wheel event listener to tabs
		this.tabs.addEventListener('wheel', event => {
			if (this.tabs === null) return
			this.tabs.style.scrollBehavior = 'auto'
			this.tabs.scrollLeft += event.deltaY
		})

		// Add scroll event listener to tabs
		this.tabs.addEventListener('scroll', () => {
			if (this.tabs === null) return
			this.updateIcons(this.tabs.scrollLeft)
		})

		// Add keyboard event listener to tabs
		this.keyboardHandler(this.tabs)
	}

	/**
	 * Activates a tab by updating its state and scrolling it into view.
	 * @param tab The tab element to activate.
	 */
	activateTab(tab: HTMLElement) {
		const activeTab = this.tabs?.querySelector('.active')
		if (activeTab) {
			activeTab.classList.remove('active')
			activeTab.setAttribute('aria-selected', 'false')
		}
		tab.setAttribute('aria-selected', 'true')
		tab.classList.add('active')
		tab.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center'
		})
	}

	/**
	 * Updates the visibility of the navigation icons based on the scroll position.
	 * @param scrolledWidth The current scroll position of the tabs.
	 */
	updateIcons(scrolledWidth: number) {
		if (this.tabs === null) return
		const { scrollLeft, scrollWidth, clientWidth } = this.tabs

		const isAtStart = scrollLeft <= 1
		const isAtEnd = scrollWidth - (scrollLeft + clientWidth) <= 1

		this.icons[0].parentElement?.classList.toggle('hide', isAtStart)
		this.icons[1].parentElement?.classList.toggle('hide', isAtEnd)
	}

	/**
	 * Debounces a function to limit its execution rate.
	 * @param func The function to debounce.
	 * @param wait The number of milliseconds to delay.
	 * @returns The debounced function.
	 */
	debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
		let timeout: number | null = null
		return function executedFunction(...args: Parameters<T>) {
			const later = () => {
				clearTimeout(timeout!)
				func(...args)
			}
			clearTimeout(timeout!)
			timeout = setTimeout(later, wait)
		}
	}

	/**
	 * Handles touch events for scrolling the tabs.
	 * @param tabs The tabs element to handle touch events for.
	 */
	touchHandler(tabs: HTMLElement) {
		let touchStartX = 0

		const handleTouchEnd = this.debounce((event: TouchEvent) => {
			const touchEndX = event.changedTouches[0].clientX
			const swipeDistance = touchStartX - touchEndX
			// Adjust the scroll amount based on screen size
			const scrollAmount =
				window.innerWidth > 768 ? swipeDistance * 3 : swipeDistance * 2
			tabs.scrollLeft += scrollAmount
		}, 100) // Debounce time in milliseconds

		tabs.addEventListener('touchstart', event => {
			touchStartX = event.touches[0].clientX
		})

		tabs.addEventListener('touchmove', event => {
			event.preventDefault() // Prevent the default scrolling behavior
		})

		tabs.addEventListener('touchend', event => {
			handleTouchEnd(event) // Pass the event object to the debounced function
		})
	}

	/**
	 * Handles scroll and wheel events for the tabs.
	 * @param tabs The tabs element to handle scroll and wheel events for.
	 */
	scrollHandler(tabs: HTMLElement) {
		tabs.addEventListener('wheel', event => {
			tabs.style.scrollBehavior = 'auto'
			tabs.scrollLeft += event.deltaY
		})

		tabs.addEventListener('scroll', () => {
			this.updateIcons(tabs.scrollLeft)
		})
	}

	/**
	 * Handles keyboard events for navigating the tabs.
	 * @param tabs The tabs element to handle keyboard events for.
	 */
	keyboardHandler(tabs: HTMLElement) {
		tabs.addEventListener('keydown', event => {
			const currentTab = tabs.querySelector('.active') as HTMLElement
			if (!currentTab) return
			let newTab: HTMLElement | null = null

			switch (event.key) {
				case 'ArrowRight':
					newTab =
						(currentTab.nextElementSibling as HTMLElement) ||
						(tabs.firstElementChild as HTMLElement)
					break
				case 'ArrowLeft':
					newTab =
						(currentTab.previousElementSibling as HTMLElement) ||
						(tabs.lastElementChild as HTMLElement)
					break
				default:
					return
			}

			if (newTab) {
				// Update aria-selected attributes
				tabs.querySelectorAll('[role="tab"]').forEach(tab => {
					tab.setAttribute(
						'aria-selected',
						tab === newTab ? 'true' : 'false'
					)
				})

				// Update active class and focus
				currentTab.classList.remove('active')
				newTab.classList.add('active')
				newTab.focus()
			}
		})
	}
}
