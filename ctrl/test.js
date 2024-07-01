export default {
  async onClick(_, el) {
    console.log('Test controller', el)
  },
  async onInit(_, el) {
    console.log('Test controller init', el)
  },
}
