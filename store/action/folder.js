import * as types from './types/folder'
import FactoryService from '../../service/FactoryService'

export const setListFolder = (folders) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_LIST_FOLDER,
            folders
        })
    }
}

const pushCreatedFolder = (folder) => {
    return (dispatch) => {
        dispatch({
            type: types.PUSH_CREATED_FOLDER,
            folder
        })
    }
}

export const choosecurrentFolderId = (currentFolderIdId) => {
    return (dispatch) => {
        dispatch({
            type: types.CHOOSE_CURRENT_FOLDER,
            currentFolderIdId
        })
    }
}

export const getListFolder = (filterFolder) => {
    return async (dispatch, getState) => {
        try {
            const currentFolderIdId = getState().folder.currentFolderIdId
            const filter = {
                ...filterFolder.filter,
                parentId: currentFolderIdId
            }
            filterFolder.filter = filter
            const response = await FactoryService.request('FolderService').getList(filterFolder)
            let folders = []
            if (response?.data?.data) {
                folders = response.data.data
            }
            dispatch(setListFolder(folders))
        } catch (error) {
            console.log(error, 'error')
        }
    }
}

export const handleCreateFolder = (name, description) => {
    return async (dispatch, getState) => {
        return new Promise(async (resolve, reject) => {
            try {
                const currentFolderIdId = getState().folder.currentFolderIdId
                const folder = {
                    name,
                    description,
                    parentId: currentFolderIdId
                }
                const response = await FactoryService.request('FolderService').create(folder)
                const createdFolder = response.data
                dispatch(pushCreatedFolder(createdFolder))
                resolve(true)
            } catch (error) {
                reject(false)
            }
        })
    }
}