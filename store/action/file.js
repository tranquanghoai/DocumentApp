import * as types from './types/file'
import FactoryService from '../../service/FactoryService'
import RNFetchBlob from 'rn-fetch-blob';

export const setListFile = (files) => {
    return (dispatch) => {
        dispatch({
            type: types.SET_LIST_FILE,
            files
        })
    }
}

export const getFileById = async (fileId) => {
    const response = await FactoryService.request('FileService').getById(fileId)
    return response.data
}

export const handleChooseFile = (fileId) => {
    return async (dispatch) => {
        try {
            const foundFile = await getFileById(fileId)
            dispatch({
                type: types.CHOOSE_CURRENT_FILE,
                currentFile: foundFile
            })
        } catch (error) {
            console.log(error, 'error')
        }

    }
}

const pushCreatedFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: types.PUSH_CREATED_FILE,
            file
        })
    }
}

export const handleCreateTextFile = (name, description, content) => {
    return async (dispatch, getState) => {
        return new Promise(async (resolve, reject) => {
            try {
                const parentFolder = getState().folder.parentFolder
                const file = {
                    name,
                    description,
                    content,
                    folderId: parentFolder ? parentFolder.id : ''
                }
                const response = await FactoryService.request('FileService').createTextFile(file)
                console.log(response, 'response')
                const createdFile = response.data
                dispatch(pushCreatedFile(createdFile))
                resolve(true)
            } catch (error) {
                console.log(error, 'error')
                reject(false)
            }
        })
    }
}

export const handleUpdateTextFile = (name, description, content) => {
    return async (dispatch, getState) => {
        return new Promise(async (resolve, reject) => {
            try {
                const currentFile = getState().file.currentFile
                const file = {
                    name, description, content
                }
                const response = await FactoryService.request('FileService').updateById(currentFile.id, file)
                console.log(response, 'response')
                const updatedFile = response.data
                // dispatch(pushCreatedFile(createdFile))
                resolve(true)
            } catch (error) {
                console.log(error, 'error')
                reject(false)
            }
        })
    }
}


export const handleUpdateImageFile = (name, description, images) => {
    console.log(name, description, images, 'name, description, images')
    return async (dispatch, getState) => {
        return new Promise(async (resolve, reject) => {
            try {
                const currentFile = getState().file.currentFile
                let data = [
                    { name: 'name', data: name },
                    { name: 'description', data: description ? description : '' },
                ]
                let attachFileIds = []
                for (let image of images) {
                    if (image.id) {
                        attachFileIds.push(image.id)
                    } else {
                        const fileName = image.path.split('/')[image.path.split('/').length - 1]
                        data.push({ name: 'images', filename: fileName, type: image.mime, data: RNFetchBlob.wrap(image.path) })
                    }
                }
                // for(){}
                // data.unshift({ name: 'attachFileIds', data: attachFileIds })
                // for (let file of attachFileIds) {
                // }
                const response = await FactoryService.request('FileService').updateImageFile(data, currentFile.id)
                resolve(true)
            } catch (error) {
                console.log(error, 'error')
                reject(false)
            }
        })
    }
}

export const handleCreateImageFile = (name, description, images) => {
    return async (dispatch, getState) => {
        return new Promise(async (resolve, reject) => {
            try {
                const parentFolder = getState().folder.parentFolder
                let data = [
                    { name: 'name', data: name },
                    { name: 'description', data: description ? description : '' },
                    { name: 'folderId', data: parentFolder ? parentFolder.id : '' }
                ]
                for (let image of images) {
                    const fileName = image.path.split('/')[image.path.split('/').length - 1]
                    data.push({ name: 'images', filename: fileName, type: image.mime, data: RNFetchBlob.wrap(image.path) })
                }
                const response = await FactoryService.request('FileService').createImageFile(data)
                const createdFile = response.data
                dispatch(pushCreatedFile(createdFile))
                resolve(true)
            } catch (error) {
                console.log(error, 'error hoai')
                reject(false)
            }
        })
    }
}
// export const getFolderById = async (folderId) => {
//     try {
//         const response = await FactoryService.request('FolderService').getById(folderId)
//         return response.data
//     } catch (error) {

//     }
// }

// export const chooseParentFolder = (parentFolderId) => {
//     return async (dispatch, getState) => {
//         try {
//             let parentFolder = null
//             if (parentFolderId) {
//                 parentFolder = await getFolderById(parentFolderId)
//             }
//             dispatch({
//                 type: types.CHOOSE_PARENT_FOLDER,
//                 parentFolder
//             })
//         } catch (error) {
//             console.log(error, 'error')
//         }

//     }
// }

// export const getListFolder = (filterFolder) => {
//     return async (dispatch, getState) => {
//         try {
//             const parentFolder = getState().folder.parentFolder
//             const filter = {
//                 ...filterFolder.filter
//             }
//             if (parentFolder && parentFolder.id) {
//                 const parentFolderId = parentFolder.id
//                 filter.parentId = parentFolderId
//             }
//             filterFolder.filter = filter
//             const response = await FactoryService.request('FolderService').getList(filterFolder)
//             let folders = []
//             if (response?.data?.data) {
//                 folders = response.data.data
//             }
//             dispatch(setListFolder(folders))
//         } catch (error) {
//             console.log(error, 'error')
//         }
//     }
// }

