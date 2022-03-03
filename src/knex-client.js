import Bluebird from 'bluebird'
import knex from 'knex'

function createKnexClient ({ user, password, host, port, database }) {
  const client = knex({
    client: 'pg',
    connection: {
      user: user,
      password: password,
      host: host,
      port: port,
      database: database
    }
  })

  const migrationOptions = {
    tableName: 'knex_migrations'
  }

  return Bluebird.resolve(client.migrate.latest(migrationOptions)).then(
    () => client
  )
}

export { createKnexClient }
