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

export const getFolderById = async (folderId) => {
    try {
        const response = await FactoryService.request('FolderService').getById(folderId)
        return response.data
    } catch (error) {

    }
}

export const chooseParentFolder = (parentFolderId) => {
    return async (dispatch, getState) => {
        try {
            let parentFolder = null
            if (parentFolderId) {
                parentFolder = await getFolderById(parentFolderId)
            }
            dispatch({
                type: types.CHOOSE_PARENT_FOLDER,
                parentFolder
            })
        } catch (error) {
            console.log(error, 'error')
        }

    }
}

export const getListFolder = (filterFolder) => {
    return async (dispatch, getState) => {
        try {
            const parentFolder = getState().folder.parentFolder
            const filter = {
                ...filterFolder.filter
            }
            if (parentFolder && parentFolder.id) {
                const parentFolderId = parentFolder.id
                filter.parentId = parentFolderId
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
                const parentFolder = getState().folder.parentFolder
                const folder = {
                    name,
                    description,
                    parentId: parentFolder ? parentFolder.id : ''
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