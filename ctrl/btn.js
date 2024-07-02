import { neurome } from '../main.js'

export default {
  state: {
    count: 0,
  },
  onInit(el) {
    neurome.cabin(el, el.state)
  },
  onClick(el) {
    el.state.count++
    neurome.cabin(el, el.state)
  },
}
