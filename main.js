import { NeuromeJS } from './neurome-js/core/neurome.js'

export const neurome = new NeuromeJS()
document.addEventListener('DOMContentLoaded', async () => {
  await neurome.load()
})
