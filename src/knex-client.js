import Bluebird from 'bluebird'
import knex from 'knex'

function createKnexClient ({ connectionString, migrationsTableName }) {
  const client = knex(connectionString)

  const migrationOptions = {
    tableName: migrationsTableName || 'knex_migrations'
  }

  return Bluebird.resolve(client.migrate.latest(migrationOptions)).then(
    () => client
  )
}

export { createKnexClient }
