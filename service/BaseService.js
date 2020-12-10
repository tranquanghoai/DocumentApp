import axios from 'axios'

const domain = 'http://192.168.1.11:3000/'

export default class BaseService {
    constructor(auth = 'employee') {
        if (auth) {
            this.setAuth(auth)
        }
    }

    setAuth(auth) {
        axios.interceptors.request.use(function (config) {
            // const user = JSON.parse(localStorage.getItem(auth))

            // if (user) {
            // }

            config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiNWY4ODI1ZGNiYmY5MTEzZTA4MDU1Nzg3IiwiZGV2aWNlSWQiOiI0NTYxZTFjZS0wYmZlLTQyNTAtODQwMy05NzFkY2E4NzU1ZjEiLCJpYXQiOjE2MDc1Nzk1NzIsImV4cCI6MTYxMDE3MTU3Mn0.yNfFyelqqzbzs5a86qK4CAc1U2h_NFgoMmJI-OLSpcY`
            return config
        })
    }

    async get(uri, params = {}) {
        try {
            return await axios.get(domain + uri, { params: params })
        } catch (e) {
            return this.errorMsg(e)
        }
    }

    async post(uri, params = {}) {
        try {
            return await axios.post(domain + uri, params)
        } catch (e) {
            return this.errorMsg(e)
        }
    }

    async put(uri, params = {}) {
        try {
            return await axios.put(domain + uri, params)
        } catch (e) {
            return this.errorMsg(e)
        }
    }

    async patch(uri, params = {}) {
        try {
            return await axios.patch(domain + uri, params)
        } catch (e) {
            return this.errorMsg(e)
        }
    }

    async show(uri) {
        try {
            return await axios.get(domain + uri)
        } catch (e) {
            return this.errorMsg(e)
        }
    }

    async delete(uri) {
        try {
            return await axios.delete(domain + uri)
        } catch (e) {
            return this.errorMsg(e)
        }
    }

    url(uri) {
        return domain + uri
    }

    errorMsg(e) {
        console.log(e)
        if (e.response === undefined) {
            e.status = 0
            e.statusText = e.message
            return { data: e }
        }

        let validationErrors = ''
        if (e.response.status === 422) {
            const errors = e.response.data.errors
            for (let key in errors) {
                validationErrors += errors[key] + '. '
            }
        }

        if (e.response.status !== 422) {
            validationErrors = e.response.data
        }

        // Vue.$notify('error', e.response.statusText, validationErrors, { duration: 5000, permanent: false })

        return { data: e.response }
    }
}