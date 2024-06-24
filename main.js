import { NeuromeJS } from './neurome-js/core/neurome.js'

document.addEventListener('DOMContentLoaded', async () => {
  const neurome = new NeuromeJS()
  await neurome.load()
  const app = document.getElementById('app')
  app.innerHTML =
    '<h1>NeuromeJS Documentation</h1><p>' + neurome.getEnv('TITLE') + '</p>'
})
