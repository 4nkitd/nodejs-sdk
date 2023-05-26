import axios from "axios";
import {createHash} from "./utils.js";
import staticValues from '../static/static.js';
import crypto from 'crypto'

const Api = class {

    constructor(apiKey, apiSecret) {
        this.key = apiKey;
        this.secret = apiSecret;
    }

    requestWrapper = axios.create({
        baseURL: `${staticValues.API_BASE_URL}/api/${staticValues.API_VERSION}`,
        headers: staticValues.HEADERS
    })

    get = async(endpoint) => {
        const response = await requestWrapper.get(endpoint);
        return response
    }

    post = async(endpoint, body) => {

        const requestBody = {
            ...body,
            hash: createHash(body, this.secret)
        }
        const response = await this.requestWrapper.post(endpoint, requestBody);
        if (!response.data.status) {
            throw new Error(response.data.error.message)
        }
        return response.data
    }
}



export default Api;