import { createExpressApp } from './app/express/index.js'
import env from './env.js'
import { createConfig } from './config.js'

const config = createConfig({ env })
const app = createExpressApp({ config, env })

function start () {
  app.listen(env.port, signalAppStart)
}

function signalAppStart () {
  console.log(`${env.appName} started`)
  console.table([
    ['Port', env.port],
    ['Environment', env.env]
  ])
}

export {
  app,
  config,
  start
}
