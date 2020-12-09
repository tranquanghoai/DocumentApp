const fetchApi = require('../common/api')
const resource = '/folder'

export default () => ({
    getList: ({ username, password }) => {
        console.log('Vo day')
        return fetchApi({
            url: `${resource}/login`,
            data: { username, password },
            method: 'POST'
        })
    }
})