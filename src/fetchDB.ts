export default class FetchDB {
	constructor() {
		console.log('Fetch constructor')
	}

	async get(url: string) {
		const response = await fetch(url)
		const data = await response.json()
		return data
	}

	async getContacts() {
        const response = await fetch('http://localhost:5233/Contact')
		const data = await response.json()
		return data
	}

	async getProjects() {
        const response = await fetch('http://localhost:5233/Project')
		const data = await response.json()
		return data
	}

	async getProject(id: number) {
        const response = await fetch(`http://localhost:5233/Project/${id}`)
		const data = await response.json()
		return data
	}

	async getProjectTechnologies() {
		const response = await fetch('http://localhost:5233/ProjectTechnology')
		const data = await response.json()
		return data
	}

	async getTechnologies() {
		const response = await fetch('http://localhost:5233/Technologies')
		const data = await response.json()
		return data
	}

	async delete(url: string) {
		await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		})

		const responseData = 'Resource deleted...'
		return responseData
	}

	async post(url: string, data: any) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const responseData = await response.json()
		return responseData
	}

	async put(url: string, data: any) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const responseData = await response.json()
		return responseData
	}
}
