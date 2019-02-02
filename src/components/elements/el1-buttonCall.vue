<template lang="pug">
  div(@click="sendBlur")
    span.button-call Заказать звонок

</template>

<script>
export default {

  name: 'el1-buttonCall',
  data () {
    return {
      positive: true
    }
  },
  methods: {
    sendBlur () {
      this.$emit('menublur', this.positive)
    }
  }
}
</script>

<style lang="sass" scoped>
  .button-call
    font: bold 15px 'Futura', Arial, sans-serif
    text-transform: uppercase
</style>
