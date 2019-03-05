<template lang="pug">
  .wrap-call(:class="{'show-box': waiting,'smooth-hide': !downcomponent}", v-show="delayHide")
    .box-form(:class="{'show-box': waiting, 'smooth-hide': !downcomponent}")
      .box-cross(@click="sendClose")
      h3.title-form Заказать<br>бесплатный звонок
      .inputs
        input(type="text", name="name", placeholder="Ваше имя")
        input(type="text", name="telephone", placeholder="Номер телефона")
      .wrap-send
        .send-phone Связаться!
      .wrap-politics
        .politics.
          Отправляя данные,<br> Вы согласны с
          #[a.link-politics(href="#", title="Политика конфинденциальности гостиницы Уржум") политикой сайта]
</template>

<script>
export default {
  name: 'back-call',
  props: ['downcomponent'],
  data () {
    return {
      waiting: false,
      delayHide: false
    }
  },
  methods: {
    sendClose () {
      this.$emit('crosschange', false)
    }
  },
  watch: {
    '$props': {
      handler: function (val, oldVal) {
        if (this.downcomponent) {
          this.delayHide = this.downcomponent
          setTimeout(() => {
            this.waiting = this.downcomponent
          }, 200)
        } else {
          setTimeout(() => {
            this.delayHide = this.downcomponent
            this.waiting = this.downcomponent
          }, 2000)
        }
      },
      deep: true
    }
  },
  mounted () {
    // console.log(this.downcomponent)
  }
}
</script>

<style lang="sass" scoped>
  .wrap-call
    height: 100vh
    width: 100vw
    position: fixed
    top: 0
    z-index: 20000
    background: rgba(0,0,0,0)
    display: flex
    align-items: center
    justify-content: center
    transition: background 2s ease
    pointer-events: none
    &.show-box
      pointer-events: auto
      background: rgba(255,255,255,0.3)
      transition: background 2s ease
    &.smooth-hide
      background: rgba(0,0,0,0)
      transition: background 1s ease
      pointer-events: none
    .box-form
      background: rgba(0,0,0,0.4)
      width: 400px
      height: 400px
      opacity: 0
      transition: all 2s ease
      box-shadow: 1px 1px 4px rgba(10,10,10,.7)
      &.show-box
        opacity: 1
        transition: all 2s ease
      &.smooth-hide
        opacity: 0
        transition: all 1s ease
      .box-cross
        width: 35px
        height: 35px
        float: right
        &:hover
          cursor: pointer
          &:before
            color: #eeeeee
        &:before
          content: '✕'
          display: inline-block
          font-size: 40px
          color: #cecece
  .title-form
    color: white
    text-transform: uppercase
    font: 28px 'Bloggersans'
    display: flex
    text-align: center
    justify-content: center
    align-items: center
    padding: 14px 0
    width: 100%
    letter-spacing: 2px
  .inputs
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100%
    input
      width: 290px
      height: 50px
      margin: 0 0 30px 0
      padding-left: 10px
      padding-right: 10px
      font: 200 18px 'Open Sans'
      text-transform: uppercase
      text-align: center
      &::-webkit-input-placeholder
        text-transform: uppercase
        text-align: center
        font: 200 18px 'Bloggersans'
        transition: all 1s ease
      &:-moz-placeholder
        text-transform: uppercase
        text-align: center
        font: 200 18px 'Bloggersans'
        transition: all 1s ease
      &:-ms-input-placeholder
        text-transform: uppercase
        text-align: center
        font: 200 18px 'Bloggersans'
        transition: all 1s ease
      &:focus::-webkit-input-placeholder
        color: transparent
        transition: all 1s ease
      &:focus::-moz-placeholder
        color: transparent
        transition: all 1s ease
      &:focus:-moz-placeholder
        color: transparent
        transition: all 1s ease
      &:focus:-ms-input-placeholder
        color: transparent
        transition: all 1s ease

  .wrap-send
    width: 100%
    display: flex
    justify-content: center

    .send-phone
      width: 290px
      height: 50px
      display: flex
      align-items: center
      justify-content: center
      text-align: center
      text-transform: uppercase
      background: #f8fd1e
      color: #2e2e2e
      font: 20px 'Bloggersans'
      cursor: pointer
      &:hover
        background: #f4d72f
      &:active
        background: #caad0b
  .wrap-politics
    display: flex
    width: 100%
    align-items: center
    text-align: center
    justify-content: center
    padding-top: 15px
    font: 12px 'Open Sans'
    color: white
    .link-politics
      color: #ffff71
</style>
