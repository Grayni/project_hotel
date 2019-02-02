<template lang="pug">
  div
    nav.menu.wrapper_blur(:class="{'is-call': downcomponent}")
      ul
        li(v-for="(item,i) in itemsArray", :id="'item-'+(i+1)", :key="'item-'+(i+1)", @click="sendMessage", :class="{'show-item': showItem}")

          router-link(:to="item[1]") {{item[0]}}
            span(v-for="(spBlock,i) in spanArray")

          ul.submenu
            li(v-for="subitem in item[2]")
              router-link(:to="subitem[1]") {{subitem[0]}}
    div.phone-head.wrapper_blur(id="'item-0'", :key="'item-0'", :class="{'show-item': showItem, 'is-call': downcomponent}")
      .reverse-phone
        .call-back(is="button-call", @menublur="blurOutButton($event)",)
        .phone-wrap
          svg.icon-phone(version="1.1", baseProfile="basic", id="Слой_1", xmlns:x="&ns_extend;", xmlns:i="&ns_ai;", xmlns:graph="&ns_graphs;", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", width="16px" height="20px", viewBox="0 0 156.9089 149.5588", fill="#6f5c56", xml:space="preserve")
            switch
              foreignObject(requiredExtensions="&ns_ai;", x="0", y="0", width="1", height="1")
              g
                path(d="M125.4313,0.1424c3.5291,0.7371,6.8128,2.1149,9.7541,4.1629c6.2993,4.3861,12.1581,9.2642,16.4836,15.7306 c2.435,3.6402,4.2623,7.5326,4.9999,11.8943c0.5931,3.5075,0.0112,6.8894-0.9788,10.2342 c-2.2179,7.493-5.6402,14.4561-9.4932,21.2118c-9.7202,17.0429-21.5713,32.4279-36.0271,45.7351 c-10.5192,9.6834-22.1254,17.9032-34.4744,25.0812c-8.4274,4.8985-17.1104,9.2714-26.3285,12.5109 c-3.3411,1.1742-6.7318,2.1648-10.247,2.6699c-5.2768,0.7582-10.3269-0.0974-15.0314-2.5189 c-8.5616-4.4067-15.6084-10.5738-20.9039-18.6619c-1.4427-2.2035-2.4144-4.5976-2.7772-7.2384 c-0.358-2.606,0.2511-4.8622,1.9413-6.9076c2.4592-2.9763,5.3458-5.4878,8.2952-7.9404 c6.376-5.3019,13.1278-10.0819,20.2265-14.3611c1.8542-1.1177,3.7291-2.318,5.9321-2.6536 c3.0751-0.4685,5.632,0.4303,7.6219,2.9438c2.9829,3.7678,5.0148,8.0748,7.1992,12.3016 c1.0493,2.0303,2.0262,4.1128,3.7437,5.7093c2.2393,2.0815,4.787,3.432,7.9322,3.3996c1.6075-0.0166,3.0912-0.4711,4.4915-1.2348 c16.4804-8.9891,30.5663-20.8392,42.2993-35.4817c3.1704-3.9565,5.8875-8.2127,8.0128-12.8328 c2.1034-4.5724,0.0917-10.2057-4.4424-12.3207c-1.4205-0.6626-2.8433-1.3368-4.313-1.8746 c-4.0262-1.4733-7.7014-3.6076-11.2737-5.925c-0.9683-0.6282-1.8455-1.4575-2.6064-2.3321 c-1.5188-1.7456-1.9131-3.8157-1.0721-5.969c0.8683-2.2232,1.8445-4.4122,2.9046-6.5512 c3.3441-6.7475,7.3722-13.0704,12.1554-18.8889c3.0357-3.6928,6.5346-6.8723,10.987-8.8091 c1.0826-0.471,2.2583-0.728,3.3912-1.0835C124.366,0.1424,124.8986,0.1424,125.4313,0.1424z")

          a.number-new(href="tel:+79097201058") +7 (909) 720-10-58
</template>

<script>

export default {
  name: 'el2-menu',
  components: {
    buttonCall: () => import('@/components/elements/el1-buttonCall.vue')
  },
  props: ['downcomponent'],
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
        ['О нас', 'about']
      ],
      spanArray: new Array(4).fill(0),
      send: 0,
      items: [{ title: 'Главная', click: () => alert('hello~') }],
      showItem: false,
      blurFromHTML: false
    }
  },
  methods: {
    sendMessage () {
      this.$emit('menumessage', this.send = this.send + 1)
    },
    blurOutButton (v) {
      // get out children (button-call)
      this.blurFromHTML = v
      // send up to the parent and change value for contact form. good..
      this.$emit('menublur', this.blurFromHTML)
    }
  },
  mounted () {
    window.onload = document.getElementById('item-1')
    this.$nextTick(() => {
      setTimeout(function () {
        this.showItem = true
      }.bind(this), 200)
    })
  }
}
</script>

<style lang="sass">

body
  box-sizing: border-box
  *
    box-sizing: border-box

.phone-head
  position: fixed
  display: flex
  left: calc(84vw + 3px)
  top: -300px
  white-space: nowrap
  min-width: 40px
  align-items: center
  justify-content: center
  z-index: 1001
  opacity: 0
  &.show-item
    top: 30px
    opacity: 1
    transition: top 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  svg
    min-width: 40px
  a
    font: 15px 'Futura', Arial, sans-serif
    color: #6f5c56
    display: flex
    align-items: center
    text-decoration: none

.menu
  margin: 0 0 0 auto
  position: fixed
  width: 100vw
  margin-right: calc(100vw - 100%)
  top: 5vh
  height: 20px
  z-index: 1000
  &:before
    content: ''
    display: block
    position: fixed
    height: 0
    width: 100%

  > ul
    position: absolute
    top: 0
    left: 7vw
    margin: 0
    padding: 0
    display: flex
    > li
      position: relative
      width: 100px
      right: -40vw
      opacity: 0
      &.show-item
        right: 0
        opacity: 1
        transition: right 1s ease, opacity 2s ease
        &:nth-child(2)
          transition-delay: .1s
        &:nth-child(3)
          transition-delay: .2s
        &:nth-child(4)
          transition-delay: .3s
    &#item-1
      position: relative

  a
    position: relative
    height: 40px
    display: block
    color: #FF6C26
    line-height: 60px
    text-align: center
    text-decoration: none
    text-transform: uppercase
    transition: .3s
    box-sizing: border-box
    font: 16px "Futura", Arial, sans-serif
    &:hover
      color: #fff
      span
        transform-origin: bottom
        transform: scaleY(1)
        &:nth-child(1)
          left: 0
          transition-delay: 0s
        &:nth-child(2)
          left: 25%
          transition-delay: 0.01s
        &:nth-child(3)
          left: 50%
          transition-delay: 0.03s
        &:nth-child(4)
          left: 75%
          transition-delay: 0.06s
    &:active
      span
        transform-origin: bottom
        transition: transform .01s
        transform: scaleY(0.1)
        &:nth-child(1)
          left: 0
          transition-delay: 0s
        &:nth-child(2)
          left: 25%
          transition-delay: 0.01s
        &:nth-child(3)
          left: 50%
          transition-delay: 0.03s
        &:nth-child(4)
          left: 75%
          transition-delay: 0.06s

    span
      position: absolute
      width: 25%
      height: 46px
      background-color: #FF6C26
      z-index: -1
      transform-origin: bottom
      transform: scaleY(0)
      transition: transform .2s
      display: inline-block
      top: -15px
      padding-bottom: 10px
      box-shadow: 3px 0 3px rgba(0,0,0,0.2)
      &:nth-child(1)
        left: 0
        transition-delay: 0s
      &:nth-child(2)
        left: 25%
        transition-delay: 0.05s
      &:nth-child(3)
        left: 50%
        transition-delay: 0.1s
      &:nth-child(4)
        left: 75%
        transition-delay: 0.15s

  .submenu
    position: absolute
    left: -20px
    right: -40px
    margin: 0 auto
    min-width: 130px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: relative
    height: 0
    opacity: 0
    overflow: hidden
    transition: all .6s ease
    li
      background: white
      padding: 10px
      margin: 2px
      position: absolute
      opacity: 1
      top: 0
      cursor: pointer
      outline: 1px solid #fff
      box-shadow: 1px 1px 2px rgba(0,0,0,.1)
      &:nth-child(1)
        transition: all .3s ease
      &:nth-child(2)
        transition: all .2s ease
      &:nth-child(3)
        transition: all .1s ease
      &:hover
        outline: 1px solid #6f5c56
        border: none
        a
          color: #6f5c56
      a
        text-transform: uppercase
        display: flex
        align-items: center
        justify-content: center
        overflow: hidden
        transition: all .2s ease
        width: 100px

  #item-2
    position: relative
    &:hover
      .submenu
        transition: all .1s ease
        opacity: 1
        height: 193px
        li
          opacity: 1
          &:nth-child(1)
            top: 0
            transition: all .1s ease
          &:nth-child(2)
            top: 64px
            transition: all .2s ease
          &:nth-child(3)
            top: 128px
            transition: all .3s ease

.menu-accordion
  position: relative
  z-index: 1000

.reverse-phone
  display: flex
  width: 170px
  position: relative
  top: -10px

.call-back
  background: #ff6c26
  color: #fff
  font: 16px 'Open Sans'
  padding: 9px
  position: relative
  transition: all .6s ease
  border-radius: 2px
  order: 1
  border: 2px solid #ff6c26
  letter-spacing: .02em
  z-index: 2
  &:hover
    transform: scale(1.1)
    cursor: auto
    cursor: pointer
    transition: all .6s ease
    background: #ff952b

.phone-wrap
  display: flex
  position: absolute
  left: -198px
  top: 0
  align-items: center
  padding: 9px 0 9px 10px
  border: 2px solid #ff6c26
  border-radius: 20px 0 0 20px

.number-new
  margin-right: 20px
  order: 1

</style>
