import * as request from 'supertest'

async function get(app, url) {
    return request(app).get(url)
        .set('Accept', 'application/json')
}

async function post(app, url, body = undefined) {
    return request(app).post(url)
        .send(body)
        .set('Accept', 'application/json')
}

export {get, post}