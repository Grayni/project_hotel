<template lang="pug">
  .header-menu(:class="{ 'hide-menu': isButtom, 'top-page': isTop, 'mobile-active': scrollTopHome()}")

    .c(v-if="widthWindow <= 968")
      .c-hamburger.c-hamburger--htla(
        @click="clickHamburger()",
        :class="{ 'is-active': stateHamburger }"
      )
        span toogle menu

    transition(name="mobile-menu")
      nav(
        v-show="mobileActive()",
        ref="menu",
        :class="{ 'menu-mobile': widthWindow <= 968, 'menu': widthWindow > 968, 'hide-menu': isButtom }"
      )
        ul
          li(
            v-for = "(item,i) in itemsArray",
            :key="'item-'+(i+1)",
            :id="'item-'+(i+1)",
            :class="{ 'show-item': showItem }"
          )

            nuxt-link(:to="item[1]") {{ item[0] }}
              span(v-for="(spBlock,i) in spanArray")

            ul.submenu
              li(v-for="subitem in item[2]")
                nuxt-link(:to="subitem[1]") {{ subitem[0] }}

    //- .wrap-phone.wrapper_blur
    .phone-head(
      id="'item-0'",
      :key="'item-0'",
      :class="{ 'show-item': isButtom||!showItem }"
    )
      .reverse-phone
        button-call.call-back.button-call(name="button-call", v-if="widthWindow > 968")
        .phone-wrap
          a.number-new(href="tel:+79097201058")
            svg(version="1.1", baseProfile="basic", id="Слой_1", xmlns:x="&ns_extend", xmlns:i="&ns_ai", xmlns:graph="&ns_graphs", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", width="16px" height="20px", viewBox="0 0 156.9089 149.5588", fill="#6f5c56", xml:space="preserve")
              switch
                foreignObject(requiredExtensions="&ns_ai", x="0", y="0", width="1", height="1")
                g
                  path(d="M125.4313,0.1424c3.5291,0.7371,6.8128,2.1149,9.7541,4.1629c6.2993,4.3861,12.1581,9.2642,16.4836,15.7306 c2.435,3.6402,4.2623,7.5326,4.9999,11.8943c0.5931,3.5075,0.0112,6.8894-0.9788,10.2342 c-2.2179,7.493-5.6402,14.4561-9.4932,21.2118c-9.7202,17.0429-21.5713,32.4279-36.0271,45.7351 c-10.5192,9.6834-22.1254,17.9032-34.4744,25.0812c-8.4274,4.8985-17.1104,9.2714-26.3285,12.5109 c-3.3411,1.1742-6.7318,2.1648-10.247,2.6699c-5.2768,0.7582-10.3269-0.0974-15.0314-2.5189 c-8.5616-4.4067-15.6084-10.5738-20.9039-18.6619c-1.4427-2.2035-2.4144-4.5976-2.7772-7.2384 c-0.358-2.606,0.2511-4.8622,1.9413-6.9076c2.4592-2.9763,5.3458-5.4878,8.2952-7.9404 c6.376-5.3019,13.1278-10.0819,20.2265-14.3611c1.8542-1.1177,3.7291-2.318,5.9321-2.6536 c3.0751-0.4685,5.632,0.4303,7.6219,2.9438c2.9829,3.7678,5.0148,8.0748,7.1992,12.3016 c1.0493,2.0303,2.0262,4.1128,3.7437,5.7093c2.2393,2.0815,4.787,3.432,7.9322,3.3996c1.6075-0.0166,3.0912-0.4711,4.4915-1.2348 c16.4804-8.9891,30.5663-20.8392,42.2993-35.4817c3.1704-3.9565,5.8875-8.2127,8.0128-12.8328 c2.1034-4.5724,0.0917-10.2057-4.4424-12.3207c-1.4205-0.6626-2.8433-1.3368-4.313-1.8746 c-4.0262-1.4733-7.7014-3.6076-11.2737-5.925c-0.9683-0.6282-1.8455-1.4575-2.6064-2.3321 c-1.5188-1.7456-1.9131-3.8157-1.0721-5.969c0.8683-2.2232,1.8445-4.4122,2.9046-6.5512 c3.3441-6.7475,7.3722-13.0704,12.1554-18.8889c3.0357-3.6928,6.5346-6.8723,10.987-8.8091 c1.0826-0.471,2.2583-0.728,3.3912-1.0835C124.366,0.1424,124.8986,0.1424,125.4313,0.1424z")

            span(v-if="widthWindow > 968") +7 (922) 908-55-60
</template>

<script>
import ButtonCall from '@/components/elements/ButtonCall'

import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  name: 'main-menu',
  components: {
    ButtonCall
  },
  data () {
    return {
      itemsArray: [
        ['Главная', '/'],
        ['Услуги', '#',
          [
            ['Номера', '/rooms'],
            ['Сауна', '/sauna'],
            ['Кафе-Ресторан', '/caffee-restorant']
          ]
        ],
        ['Контакты', '/contacts'],
        ['О нас', '/about']
      ],
      widthWindow: 0,
      spanArray: new Array(4).fill(0),
      items: [{ title: 'Главная', click: () => alert('hello~') }],
      showItem: false,
      isButtom: false,
      scroll: 0,
      position: 0,
      stateHamburger: false,
      timeLine: null
    }
  },
  methods: {
    scrollTopHome () {
      if (this.$route.name === 'Home') {
        return this.position === 0
      }
    },
    clickHamburger () {
      this.stateHamburger = !this.stateHamburger
    },
    mobileActive () {
      return (this.widthWindow <= 968) ? this.stateHamburger : true
    }
  },
  computed: {
    isTop () {
      return this.position === 0 && this.stateHamburger === false
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== from.name) {
        this.stateHamburger = false
      }
    }
  },
  mounted () {
    let vm = this
    if (process.client) {
      this.widthWindow = window.innerWidth
      this.position = window.pageYOffset || document.documentElement.scrollTop

      window.onload = document.getElementById('item-1')

      vm.$nextTick(() => {
        setTimeout(function () {
          vm.showItem = true
        }, 200)
      })

      window.onscroll = function () {
        this.scroll = window.pageYOffset || document.documentElement.scrollTop
        vm.isButtom = ((vm.position < this.scroll) && vm.position !== 0)
        vm.position = this.scroll
        vm.stateHamburger = false
      }

      window.addEventListener('resize', () => {
        vm.widthWindow = window.innerWidth
        eventEmitter.$emit('resize', vm.widthWindow)
      })
    }

    this.timeLine = new this.$gsap.TimelineMax()
    this.timeLine.to('.header-menu', 0.8, { opacity: 1 })
  }
}
</script>

<style lang="stylus" scoped>
.header-menu
  background rgba(241,238,233,0.8)
  height 69px
  position relative
  top 0
  transition top 0.5s ease, background 0.5s ease
  opacity 0
body
  box-sizing border-box
  *
    box-sizing border-box
  .hide-menu
    top: -69px
    transition top 0.5s ease
  .top-page
    background transparent
    transition background 0.5s ease
    transition-delay 0.9s

.phone-head
  position fixed
  display flex
  right 30px
  white-space nowrap
  min-width 40px
  align-items center
  justify-content center
  z-index 1001
  top 25px
  transition top 0.5s ease
  &.show-item
    top -69px
    transition top 0.5s ease
    // transition top 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  svg
    min-width 40px
  a
    font bold 15px 'Futura', Arial, sans-serif
    color #6f5c56
    display flex
    align-items center
    text-decoration none
    letter-spacing 1px

.menu
  margin 0 0 0 auto
  position fixed
  width 100vw
  margin-right calc(100vw - 100%)
  top 26px
  height 20px
  z-index 1000
  transition top 0.5s ease
  &:before
    content ''
    display block
    position fixed
    height 0
    width 100%

  > ul
    position absolute
    top 0
    left 100px
    margin 0
    padding 0
    display flex
    > li
      position relative
      width 100px
      right -40vw
      opacity 0
      &.show-item
        right 0
        opacity 1
        transition right 1s ease, opacity 2s ease
        &:nth-child(2)
          transition-delay .1s
        &:nth-child(3)
          transition-delay .2s
        &:nth-child(4)
          transition-delay .3s
    &#item-1
      position relative

  a
    position relative
    height 40px
    display block
    color #FF6C26
    line-height 60px
    text-align center
    text-decoration none
    text-transform uppercase
    transition .3s
    box-sizing border-box
    font 16px "Futura", Arial, sans-serif
    &:hover
      color #fff
      span
        transform-origin bottom
        transform scaleY(1)
        &:nth-child(1)
          left 0
          transition-delay 0s
        &:nth-child(2)
          left 25%
          transition-delay 0.01s
        &:nth-child(3)
          left 50%
          transition-delay 0.03s
        &:nth-child(4)
          left 75%
          transition-delay 0.06s
    &:active
      span
        transform-origin bottom
        transition transform .01s
        transform scaleY(0.1)
        &:nth-child(1)
          left 0
          transition-delay 0s
        &:nth-child(2)
          left 25%
          transition-delay 0.01s
        &:nth-child(3)
          left 50%
          transition-delay 0.03s
        &:nth-child(4)
          left 75%
          transition-delay 0.06s

    span
      position absolute
      width 25%
      height 46px
      background-color #FF6C26
      z-index -1
      transform-origin bottom
      transform scaleY(0)
      transition transform .2s
      display inline-block
      top -15px
      padding-bottom 10px
      box-shadow 3px 0 3px rgba(0,0,0,0.2)
      &:nth-child(1)
        left 0
        transition-delay 0s
      &:nth-child(2)
        left 25%
        transition-delay 0.05s
      &:nth-child(3)
        left 50%
        transition-delay 0.1s
      &:nth-child(4)
        left 75%
        transition-delay 0.15s

  .submenu
    position absolute
    left -20px
    right -40px
    margin 0 auto
    min-width 130px
    display flex
    flex-direction column
    justify-content center
    align-items center
    position relative
    height 0
    opacity 0
    overflow hidden
    transition all .6s ease
    li
      background white
      padding 10px
      margin 2px
      position absolute
      opacity 1
      top 0
      cursor pointer
      outline 1px solid #fff
      box-shadow 1px 1px 2px rgba(0,0,0,.1)
      &:nth-child(1)
        transition all .3s ease
      &:nth-child(2)
        transition all .2s ease
      &:nth-child(3)
        transition all .1s ease
      &:hover
        outline 1px solid #6f5c56
        border none
        a
          color #6f5c56
      a
        text-transform uppercase
        display flex
        align-items center
        justify-content center
        overflow hidden
        transition all .2s ease
        width 100px

  #item-2
    position relative
    &:hover
      .submenu
        transition all .1s ease
        opacity 1
        height 193px
        li
          opacity 1
          &:nth-child(1)
            top 0
            transition all .1s ease
          &:nth-child(2)
            top 64px
            transition all .2s ease
          &:nth-child(3)
            top 128px
            transition all .3s ease

.menu-accordion
  position relative
  z-index 1000

.reverse-phone
  display flex
  width 170px
  position relative
  top -10px

.phone-wrap
  display flex
  position absolute
  left -205px
  top 0
  align-items center
  padding 10px 0 9px 10px
  border 1px solid #ff6c26
  border-radius 20px 0 0 20px

.number-new
  margin-right 12px
  order 1

// mobile version
.mobile-active
  z-index 1002
.menu-mobile
  position relative
  top 19px
  overflow hidden
  max-height 360px
  > ul
    > li:not(#item-2)
      padding 10px 0 10px 20px
      background-color rgba(241,238,233,0.8)
      border-bottom 1px solid #decdc2
      &:nth-child(1)
        border-top 1px solid #decdc2
    > #item-2
      > a
        display none
      li
        padding 10px 0 10px 20px
        border-bottom 1px solid #decdc2
    > li
      background-color rgba(241,238,233,0.8)
    a
      text-decoration none
      font 18px Futura
      color #6f5c56
.c
  width 100%
  display flex
  justify-content flex-end
  position relative
  top 10px
  right 10px
  &-hamburger
    display block
    position relative
    overflow hidden
    margin 0
    padding 0
    width 50px
    height 50px
    font-size 0
    text-indent -9999px
    appearance none
    box-shadow none
    border-radius none
    border none
    cursor pointer
    transition background 0.3s

    span
      display block
      position absolute
      top 22px
      left 9px
      right 9px
      height 2px
      background #6f5c56
      &:before, &:after
        position absolute
        display block
        left 0
        width 100%
        height 2px
        background-color #6f5c56
        content ''
      &:before
        top -10px
      &:after
        bottom -10px

    &--htla
      span
        transition: transform 0.3s
        &:before
          transform-origin top right
          transition transform 0.3s, width 0.3s, top 0.3s
        &:after
          transform-origin bottom right
          transition transform 0.3s, width 0.3s, bottom 0.3s

      &.is-active
        span
          transform rotate(180deg)
          &:before, &:after
            width 50%
          &:before
            top 0
            transform translateX(19px) translateY(1px) rotate(45deg)
          &:after
            bottom 0
            transform translateX(19px) translateY(-1px) rotate(-45deg)

.mobile-menu
  &-enter-active,
  &-leave-active
    max-height 265px
    transition all 1s ease
  &-enter-active
    transition-delay 0.2s

  &-enter,
  &-leave-to
    max-height 0

@media (max-width: 968px)
  .reverse-phone
    top -13px
  .phone-wrap
    width 42px
    left auto
    right 40px
    padding 10px 0
    border 1px solid #6f5c56
    border-radius 20px
</style>
