<template lang="pug">

  #IndexTemplate
    header(is="headerBlock", id="headerBlock")
      div.wrapper_blur(is="el3Logo", :msg="messagefromlogo", :position="scrollStatus", :class="{'is-call': blurStatus}")
      div.menu-wrap(is="el2Menu", @menumessage="messageOutMenu($event)", @menublur="blurOutMenu($event)", :downcomponent="blurStatus")

    div.br(is="progressBar" id="progressBar")

    div(is="transition", name="fade", mode="out-in")
      div(is="router-view", @scrollValue="getScroll($event)", :downcomponent="blurStatus", @menublur="blurOutMenu($event)")
    div(is="backCall", @crosschange="getCross($event)", :downcomponent="blurStatus")
</template>

<script>
export default {
  name: 'IndexTemplate',
  components: {
    el2Menu: () => import('./components/elements/el2-menu.vue'),
    el3Logo: () => import('./components/elements/el3-logo.vue'),
    headerBlock: () => import('./components/elements/headerBlock.vue'),
    backCall: () => import('./components/elements/back-call.vue'),
    progressBar: () => import('./components/apps/progress-bar.vue')
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Гостиница Уржум',
    // all titles will be injected into this template
    titleTemplate: '%s | Гостиница Уржум'
  },
  data () {
    return {
      messagefromlogo: '',
      scrollStatus: 0,
      blurStatus: false
    }
  },
  methods: {
    messageOutMenu (v) {
      this.messagefromlogo = v
    },
    getScroll (v) {
      this.scrollStatus = v
    },
    getCross (v) {
      this.blurStatus = v
      let htmlHideScroll = document.querySelector('html')
      htmlHideScroll.classList.remove('blur-html')
    },
    blurOutMenu (v) {
      this.blurStatus = v
      let htmlHideScroll = document.querySelector('html')
      htmlHideScroll.classList.add('blur-html')
    }
  }
}
</script>

<style lang="sass">
  @import './styles/reset.css'
  @import './styles/fonts'
  @import '../node_modules/sal.js/dist/sal.css'

  html
    &::-webkit-scrollbar-track
      border-radius: 4px
      background: #fff
    &::-webkit-scrollbar
      width: 6px
    &::-webkit-scrollbar-thumb
      border-radius: 4px
      background: #d5b666
    &:hover::-webkit-scrollbar-thumb
      background: #d5b666
    &.blur-html
      overflow: hidden

  body
    position: relative
    background: #fff
    overflow-x: hidden
  .menu-wrap
    width: 100vw
  ul
    padding: 0

  div, svg
    &:active, &:focus,
      outline: none

  .fade-enter-active, .fade-leave-active
    transition: opacity .2s

  .fade-enter, .fade-leave-to
    opacity: 0

  .wrapper_blur
    -webkit-animation-timing-function: linear
    -webkit-animation-name: blurback
    -webkit-animation-duration: 1s
    -webkit-fill-mode: backwards
    animation-timing-function: linear
    animation-name: blurback
    animation-duration: 1s
    animation-fill-mode: forwards
    &.is-call
      -webkit-animation-timing-function: linear
      -webkit-animation-name: blur
      -webkit-animation-duration: 3s
      -webkit-fill-mode: forwards
      animation-timing-function: linear
      animation-name: blur
      animation-duration: 3s
      animation-fill-mode: forwards

  @-webkit-keyframes blur
    0%
      -webkit-filter: blur(0px)
    20%
      -webkit-filter: blur(1px)
    40%
      -webkit-filter: blur(2px)
    60%
      -webkit-filter: blur(3px)
    80%
      -webkit-filter: blur(4px)
    100%
      -webkit-filter: blur(5px)

  @keyframes blur
    0%
      -webkit-filter: blur(0px)
    20%
      -webkit-filter: blur(1px)
    40%
      -webkit-filter: blur(2px)
    60%
      -webkit-filter: blur(3px)
    80%
      -webkit-filter: blur(4px)
    100%
      -webkit-filter: blur(5px)

  @-webkit-keyframes blurback
    0%
      -webkit-filter: blur(5px)
    20%
      -webkit-filter: blur(4px)
    40%
      -webkit-filter: blur(3px)
    60%
      -webkit-filter: blur(2px)
    80%
      -webkit-filter: blur(1px)
    100%
      -webkit-filter: blur(0px)

  @keyframes blurback
    0%
      -webkit-filter: blur(5px)
    20%
      -webkit-filter: blur(4px)
    40%
      -webkit-filter: blur(3px)
    60%
      -webkit-filter: blur(2px)
    80%
      -webkit-filter: blur(1px)
    100%
      -webkit-filter: blur(0px)

  @media screen and (min-width: 960px)
    html
      //margin-right: calc(100vw - 100%+5px)
      //margin-left: 0
</style>
