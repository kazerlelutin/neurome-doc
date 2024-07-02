import { neurome } from '../main.js'

export default {
  state: {
    test: 'truc',
  },
  async onClick() {
    neurome.pulse('room1', {
      type: 'test',
      data: 'Hello from test controller',
    })
  },
}
