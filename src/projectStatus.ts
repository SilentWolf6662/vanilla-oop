import { ProjectElement } from "./types/types"

export default class ProjectStatus {
    constructor(private container: HTMLElement, private project: ProjectElement) {
        this.initialize()
    }

    initialize() {
        const status = this.createStatus()
        this.updateStatus(status, this.project.status)
    }

    createStatus(): HTMLElement {
        const status = document.createElement('div')
        status.classList.add('status')
        this.container.appendChild(status)
        return status
    }

    updateStatus(status: HTMLElement, statusText: string) {
        status.textContent = statusText
    }
}