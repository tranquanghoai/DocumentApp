import BaseService from '../BaseService'
import RNFetchBlob from 'rn-fetch-blob';
// import * as axios from 'axios'
import $param from 'jquery-param';

export default class FileService extends BaseService {
	constructor(slug) {
		super()
		this.slug = 'file'
	}
	async getList(params = {}) {
		try {
			const res = await this.get(this.slug + `list-folder?${$param(params)}`)
			return res.data
		} catch (e) {
			return this.errorMsg(e)
		}
	}

	async createTextFile(file = {}) {
		try {
			const res = await this.post(this.slug + `/create-text`, file)
			return res.data
		} catch (error) {
			return this.errorMsg(e)
		}
	}

	async createImageFile(data = []) {
		const res = await this.fetchBlob({
			method: 'POST',
			url: this.slug + `/create-image`,
			data
		})
		return res
	}

	async create(folder = {}) {
		try {
			const res = await this.post(this.slug + `create`, folder)
			return res.data
		} catch (error) {
			return this.errorMsg(e)
		}
	}

	async update(id, params = {}) {
		const res = await this.post(`/api/v1/users/${id}`, params)
		return res.data
	}

	async getById(id) {
		const res = await this.get(`${this.slug}${id}`)
		return res.data
	}

	async destroy(id) {
		const res = await this.delete(`/api/v1/users/${id}`)
		return res.data
	}
}