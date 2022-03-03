import { createKnexClient } from './knex-client.js'
import { createHome } from './app/home/index.js'
import { createRecordViewings } from './app/record-viewings/index.js'

function createConfig ({ env }) {
  const db = createKnexClient({
    host: env.databaseHost,
    port: env.databasePort,
    database: env.databaseName,
    user: env.databaseUsername,
    password: env.databasePassword
  })
  const homeApp = createHome({ db })

  const recordViewingsApp = createRecordViewings({ db })

  return {
    env,
    db,
    homeApp,
    recordViewingsApp
  }
}

export { createConfig }
