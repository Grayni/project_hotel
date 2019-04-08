<template lang="pug">
  div(@click="callBackWindowOn")
    slot.button-call(name="button-call") Заказать звонок

</template>

<script>
import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  name: 'button-call',
  methods: {
    callBackWindowOn () {
      eventEmitter.$emit('openCallBack')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .button-call
    font 200 12px 'Futura', Arial, sans-serif
    text-transform uppercase
    letter-spacing 3px
    background #ff6c26
    color #fff
    padding 11px 10px 10px 10px
    position relative
    border-radius 2px
    border 2px solid #ff6c26
    transition transform .3s ease-in, background .6s ease-in
    z-index 2
    &:hover
      transform scale(1.05)
      cursor pointer
      background #ff952b
      border-color #ff952b
      transition transform .3s ease-in, background .6s ease-in
</style>
