export default {
  methods: {
    blurOutButton (v) {
      // get out children (button-call)
      this.blurFromHTML = v
      // send up to the parent and change value for contact form. good..
      this.$emit('menublur', this.blurFromHTML)
    }
  }
}
