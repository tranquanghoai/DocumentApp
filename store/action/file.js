import * as types from './types/file'
import FactoryService from '../../service/FactoryService'

// export const setListFolder = (folders) => {
//     return (dispatch) => {
//         dispatch({
//             type: types.SET_LIST_FOLDER,
//             folders
//         })
//     }
// }

const pushCreatedFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: types.PUSH_CREATED_FILE,
            file
        })
    }
}

export const handleCreateTextFile = (name, description, content) => {
    console.log('Vo day k')
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

