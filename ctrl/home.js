import { neurome } from '../main.js'

export default {
  state: {
    test: 'truc',
  },
  async onInit(el) {
    console.log(
      'onInit',

      await neurome.models.recipes.getAll()
    )
    const data = {
      title: 'title',
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
