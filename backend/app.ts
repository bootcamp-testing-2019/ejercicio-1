import 'reflect-metadata'
import {createConnection} from 'typeorm'
import  app from './app-express'

async function initializeApp() {
    app.connection = await createConnection()

    app.closeConnection = function() {
        this.connection.close()
        this.connection = null
    }

    return app
}

export default initializeApp