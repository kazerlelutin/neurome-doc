import { NeuromeJS } from './neurome-js/core/neurome.js'

const stores = [
  {
    name: 'recipes',
    keyPath: 'id',
    autoIncrement: true,
    indices: [{ name: 'name', keyPath: 'name', unique: true }],
  },
  {
    name: 'ingredients',
    keyPath: 'id',
    autoIncrement: true,
    indices: [{ name: 'name', keyPath: 'name', unique: false }],
  },
]

export const neurome = new NeuromeJS({
  style: true,
  locale: 'fr',
  stores,
  version: 1,
  dbName: 'recipes',
})
document.addEventListener('DOMContentLoaded', async () => {
  await neurome.load()
})
