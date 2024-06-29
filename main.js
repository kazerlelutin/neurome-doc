import { NeuromeJS } from './neurome-js/core/neurome.js'

document.addEventListener('DOMContentLoaded', async () => {
  const neurome = new NeuromeJS()
  await neurome.load()
})
