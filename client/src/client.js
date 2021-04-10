import axios from 'axios';

export default class Client {
    // accepts a 'host' parameter to use as the api host. But if none is provided then we will use the localhost default
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
    getLandById(id){
        this.api.get(`/lands/${id}`)
    }

}