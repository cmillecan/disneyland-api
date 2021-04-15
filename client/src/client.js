import axios from 'axios';

export default class Client {
    constructor(host = 'http://localhost:3000/api') {
        this.api = axios.create({
            baseURL: host
        })
    }

    createLand(newLand) {
        this.api.post(`/api/lands`, newLand)
    }
    async getLands() {
        const resp = await this.api.get(`/api/lands`)
        if (!resp.data.success) return []
        return resp.data.data
    }
    updateLand(id, newLand) {
        this.api.put(`/api/lands/${id}`, newLand)
    }
    deleteLand(id) {
        this.api.delete(`/api/lands/${id}`)
    }
    getLandById(id){
        this.api.get(`/api/lands/${id}`)
    }
    search(query) {
        this.api.get(`/api/search?q=${query}`)
    }
}