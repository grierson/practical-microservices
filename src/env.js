import colors from 'colors/safe.js'
import dotenv from 'dotenv'
import packageJson from '../package.json' assert { type: 'json' };

const envResult = dotenv.config()

if (envResult.error) {
  console.error(
    `${colors.red('[ERROR] env failed to load:')} ${envResult.error}`
  )

  process.exit(1)
}

function requireFromEnv (key) {
  if (!process.env[key]) {
    // eslint-disable-next-line no-console
    console.error(`${colors.red('[APP ERROR] Missing env variable:')} ${key}`)

    return process.exit(1)
  }

  return process.env[key]
}

export default {
  appName: requireFromEnv('APP_NAME'),
  databaseName: requireFromEnv('DATABASE_NAME'),
  databaseHost: requireFromEnv('DATABASE_HOST'),
  databasePort: requireFromEnv('DATABASE_PORT'),
  databaseUsername: requireFromEnv('DATABASE_USER'),
  databasePassword: requireFromEnv('DATABASE_PASS'),
  env: requireFromEnv('NODE_ENV'),
  port: parseInt(requireFromEnv('PORT'), 10),
  version: packageJson.version
}
