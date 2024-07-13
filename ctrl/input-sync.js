import { neurome } from '../main.js'

export default {
  onInit() {
    console.log('input-sync onInit')
  },
  async onInput(_, el) {
    const value = el.target.value
    if (value.length !== 6) return
    await neurome.handleShortCodeInput(value)

    neurome.sendMessage({
      type: 'shortCode',
      data: el.target.value,
    })
  },
}
