const fetchApi = require('../common/api')
const resource = '/auth'

export default {
    LOGIN: ({ username, password }) => fetchApi({
        url: `${resource}/login`,
        body: { username, password },
        method: 'POST'
    }),
}