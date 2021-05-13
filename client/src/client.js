import axios from 'axios';

export default class Client {
    constructor(host = 'http://localhost:3000/api') {
        this.api = axios.create({
            baseURL: host
        })
    }

    createLand(newLand) {
        this.api.post(`/lands`, newLand)
    }

    async getLands() {
        const resp = await this.api.get(`/lands`)
        if (!resp.data.success) return []
        return resp.data.data
    }

    updateLand(id, newLand) {
        this.api.put(`/lands/${id}`, newLand)
    }

    deleteLand(id) {
        this.api.delete(`/lands/${id}`)
    }

    async getLandById(id) {
        const resp = await this.api.get(`/lands/${id}`)
        if (!resp.data.success) return []
        return resp.data.data
    }

    createAttraction(newAttraction) {
        this.api.post(`/attractions`, newAttraction)
    }
    async getAttractions() {
        const resp = await this.api.get(`/attractions`)
        if (!resp.data.success) return []
        return resp.data.data
    }
    updateAttraction(id, newAttraction) {
        this.api.put(`/attractions/${id}`, newAttraction)
    }
    deleteAttraction(id) {
        this.api.delete(`/attractions/${id}`)
    }
    async getAttractionById(id) {
        const resp = await this.api.get(`/attractions/${id}`)
        if (!resp.data.success) return []
        return resp.data.data
    }

    async search(query) {
        const resp = await this.api.get(`/search?q=${query}`)
        if (!resp.data.success) return []
        return resp.data.data
    }
}