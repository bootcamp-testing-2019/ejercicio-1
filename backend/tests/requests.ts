import * as request from 'supertest'
import initializeApp from '../app'

let app

async function getApp() {
    if(app === undefined) {
        app = await initializeApp()
    }

    return app
}

async function get(url) {
    const app = await getApp()

    return request(app).get(url)
        .set('Accept', 'application/json')
}

async function post(url, body = undefined) {
    const app = await getApp()

    return request(app).post(url)
        .send(body)
        .set('Accept', 'application/json')
}

export {get, post}