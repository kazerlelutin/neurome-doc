import { NeuromeJS } from './neurome-js/core/neurome.js'

export const neurome = new NeuromeJS({
  style: true,
  locale: 'fr',
})
document.addEventListener('DOMContentLoaded', async () => {
  await neurome.load()
})
