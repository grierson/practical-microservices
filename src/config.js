import { createKnexClient } from './knex-client.js'
import { createHome } from './app/home/index.js'
import { createRecordViewings } from './app/record-viewings/index.js'

function createConfig ({ env }) {
  const db = createKnexClient({
    connectionString: env.databaseUrl
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
