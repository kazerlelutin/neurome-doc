import { neurome } from '../main.js'

export default {
  async onInit(_, el) {
    console.log('Home controller init', el)

    const data = {
      title: 'Home',
      showList: true,
      descript: 'This is a description',
      items: [
        { name: 'Item 1', value: '1' },
        { name: 'Item 2', value: '2' },
        { name: 'Item 3', value: '3' },
      ],
    }

    neurome.cabin(el, data)
  },
}
