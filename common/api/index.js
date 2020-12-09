const axios = require('axios')

const objectFetchDefault = {
    method: null,
    header: null,
    defaultToken: false,
}

const CONTENT_TYPE = 'Content-Type'
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_MULTIPART = 'multipart/form-data'
const CONTENT_TYPE_X_FORM = 'application/x-www-form-urlencoded'
const AUTHORIZATION = 'Authorization'
const FETCHTIMEOUT = 20000

const BASE_URL = 'http://localhost:3000'

export default fetchAPI = async (url, data, configFetch = { ...objectFetchDefault }) => {
    try {
        console.log('Run api')
        // method
        let method = 'POST'
        if (helper.hasProperty(configFetch, 'method') && configFetch.method) {
            method = configFetch.method;
        }

        // headers
        let headers = {
            CONTENT_TYPE: CONTENT_TYPE_JSON
        }
        // token (not sure)
        if (configFetch.defaultToken) {
            headers[AUTHORIZATION] = `Bearer token`
        }
        if (configFetch.headers) {
            headers = { ...headers, ...configFetch.headers }
        }

        // final configuration
        const config = {
            url,
            method,
            headers,
            baseURL: BASE_URL
        }

        // body
        if (method !== 'GET') {
            config.data = JSON.stringify(data)
        }
        const response = await axios(config)
    } catch (error) {
        console.log(error, 'error')
    }
}

