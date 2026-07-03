import axios from 'axios'

const baseUrl = '/api'

// axios 二次封装核心

class HttpRequest {
    constructor() {
        this.baseUrl = baseUrl;
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    request(options) {
        options = {...this.getInsideConfig(),...options}
        // 创建axios实例
        const instance = axios.create()
        // 实例拦截器的绑定
        this.interception(instance)
        return instance(options)
    }

    interception(instance) {
        instance.interceptors.request.use(function (config) {
            return config
        },function (error) {
            return Promise.reject(error)
        })

        instance.interceptors.response.use(function (reponse) {
            return reponse
        },function (error) {
            return Promise.reject(error)
        })
    }
}

export default new HttpRequest(baseUrl)