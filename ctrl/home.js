import { neurome } from '../main.js'

export default {
  state: {
    test: 'truc',
  },
  async onInit(el) {
    const code = await neurome.generateOffer()
    console.log('Generated short code:', code)
    const data = {
      title: 'Bonjour le monde !',
      code,
      showList: true,
      descript: 'This is a description',
      items: [
        { name: 'Item 1', value: '1' },
        { name: 'Item 2', value: '2' },
        { name: 'Item 3', value: '3' },
      ],
    }

    el.state = {
      ...el.state,
      ...data,
    }
    neurome.cabin(el, data)
  },
  async onPulse(el, { message }) {
    const data = {
      ...el.state,
      title: message.data,
    }
    neurome.cabin(el, data)
  },
}
