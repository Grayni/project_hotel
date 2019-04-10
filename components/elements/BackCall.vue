<template lang="pug">
  div
    transition(name="show-call", key="show-call")
      .wrap-call(v-if="blurStatus")
        .box-form(:state-message="showMessage()")
          transition-group(name="fade", mode="in-out")
            .state(v-if="stateMessage === 0", key="state-1")
              .box-cross(@click="closeWindow")
              h3.title-form Заказать<br>бесплатный звонок
              .inputs
                input(type="text", name="name", placeholder="Ваше имя",  maxlength="26", v-model="name")
                input.form-control(type="text", placeholder="+7 (XXX)-XXX-XX-XX", v-mask='"✆ +7 (###) - ### - ## - ##"', maxlength="26", v-model="phoneNumber")
              .wrap-send
                .send-phone(@click="sendData()") Связаться!
              .wrap-politics
                .politics.
                  Отправляя данные,<br> Вы согласны с
                  #[a.link-politics(href="#", title="Политика конфинденциальности гостиницы Уржум") политикой сайта]
            .state.send(v-if="stateMessage === 2", key="state-2")
              span Некорректные данные. Попробуйте снова.
            .state.send(v-if="stateMessage === 1", key="state-3")
              span Данные отправлены. Мы с вами свяжемся!
</template>

<script>
import { eventEmitter } from '@/plugins/eventEmitter'
import blurStatus from '@/components/mixins/blurStatus'
import axios from 'axios'

export default {
  name: 'back-call',
  mixins: [blurStatus],
  data () {
    return {
      name: '',
      phoneNumber: '',
      stateMessage: 0
    }
  },
  methods: {
    showMessage () {
      let vm = this
      if (this.stateMessage === 1) {
        setTimeout(() => {
          vm.stateMessage = 0
          vm.closeWindow()
        }, 3000)
      }
      if (this.stateMessage === 2) {
        setTimeout(() => {
          vm.stateMessage = 0
        }, 3000)
      }
    },
    closeWindow () {
      eventEmitter.$emit('closeCallBack')
    },
    sendData () {
      axios({
        method: 'post',
        url: 'api',
        data: {
          name: this.name,
          phone: this.phoneNumber
        }
      })
        .then(res => { this.stateMessage = res.data })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrap-call
    height 100%
    width 100vw
    position fixed
    top 0
    z-index 200000
    background rgba(0,0,0,0)
    display flex
    align-items center
    justify-content center
    .box-form
      position relative
      background rgba(0,0,0,0.4)
      width 400px
      height 400px
      transition all 2s ease
      box-shadow 1px 1px 4px rgba(10,10,10,.7)
      .box-cross
        width 35px
        height 35px
        float right
        &:hover
          cursor pointer
          &:before
            color #eeeeee
        &:before
          content '✕'
          display inline-block
          font-size 40px
          color #cecece

  .show-call-enter-active, .show-call-leave-active
    transition all 1s ease

  .show-call-enter, .show-call-leave-to
    opacity 0
    pointer-events none

  .title-form
    color white
    text-transform uppercase
    font 28px 'Bloggersans'
    display flex
    text-align center
    justify-content center
    align-items center
    padding 14px 0
    width 100%
    letter-spacing 2px
  .inputs
    display flex
    align-items center
    justify-content center
    flex-direction column
    width 100%
    input
      width 290px
      height 50px
      margin 0 0 30px 0
      padding-left 10px
      padding-right 10px
      font 200 18px 'Open Sans'
      text-transform uppercase
      text-align center
      &::-webkit-input-placeholder
        text-transform uppercase
        text-align center
        font 200 18px 'Bloggersans'
        transition all 1s ease
      &:-moz-placeholder
        text-transform uppercase
        text-align center
        font 200 18px 'Bloggersans'
        transition all 1s ease
      &:-ms-input-placeholder
        text-transform uppercase
        text-align center
        font 200 18px 'Bloggersans'
        transition all 1s ease
      &:focus::-webkit-input-placeholder
        color transparent
        transition all 1s ease
      &:focus::-moz-placeholder
        color transparent
        transition all 1s ease
      &:focus:-moz-placeholder
        color transparent
        transition all 1s ease
      &:focus:-ms-input-placeholder
        color transparent
        transition all 1s ease

  .wrap-send
    width 100%
    display flex
    justify-content center

    .send-phone
      width 290px
      height 50px
      display flex
      align-items center
      justify-content center
      text-align center
      text-transform uppercase
      background #f8fd1e
      color #2e2e2e
      font 20px 'Bloggersans'
      cursor pointer
      &:hover
        background: #f4d72f
      &:active
        background: #caad0b
  .wrap-politics
    display flex
    width 100%
    align-items center
    text-align center
    justify-content center
    padding-top 15px
    font 12px 'Open Sans'
    color white
    .link-politics
      color #ffff71

  .fade-enter-active, .fade-leave-active
    opacity 1
    transition opacity .5s ease

  .fade-enter, .fade-leave-to
      opacity 0

  .state
   &.send
    position absolute
    font 22px Futura
    color #fff
    padding 20px
    left 0
    top 0
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    text-align center
</style>
