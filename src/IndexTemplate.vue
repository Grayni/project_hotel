<template lang="pug">

  #IndexTemplate(:line-scroll="htmlScrollStatus()")
    header-block(:class="{'is-call': blurStatus}", :position="scrollStatus")
      logo(:position="scrollStatus")
      main-menu.menu-wrap

    progress-bar.br(id="progressBar")

    transition(name="fade", mode="out-in")
      router-view(
        @scrollValue="getScroll($event)",
        :class="{'is-call': blurStatus}"
      )
    transition(name="show-call", key="show-call")
      back-call(v-if="blurStatus")

    transition(name="show-call", key="show-call")
      lightbox(v-if="blurStatus", :slidereturn="numberSlide", #from-slider="{ slideNum }")
        img.show-slide(:src="'/static/slider/slide-'+slideNum+'.jpg'", :alt="'Слайд-'+slideNum")
</template>

<script>
import MainMenu from './components/elements/MainMenu'
import Logo from './components/elements/Logo'
import HeaderBlock from './components/elements/HeaderBlock'
import BackCall from './components/elements/BackCall'
import ProgressBar from './components/apps/ProgressBar'
import Lightbox from '@/components/elements/Lightbox'

import blurStatus from '@/components/mixins/blurStatus'

export default {
  name: 'IndexTemplate',
  mixins: [blurStatus],
  components: {
    MainMenu, Logo, HeaderBlock, BackCall, ProgressBar, Lightbox
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Гостиница Уржум',
    // all titles will be injected into this template
    titleTemplate: '%s | Гостиница Уржум'
  },
  data () {
    return {
      scrollStatus: 0,
      counter: 0,
      lineScrollDisplay: ''
    }
  },
  methods: {
    getScroll (v) {
      this.scrollStatus = v
    },
    htmlScrollStatus () {
      this.lineScrollDisplay.style.overflow = (this.blurStatus) ? 'hidden' : 'visible'
    }
  },
  created () {
    this.lineScrollDisplay = document.querySelector('html')
  }
// ,
// updated () {
  // this.htmlScroll()
// }
}
</script>

<style lang="stylus">
  @import './styles/reset.css'
  @import './styles/fonts.sass'

  html
    &::-webkit-scrollbar-track
      border-radius 4px
      background #fff
    &::-webkit-scrollbar
      width 6px
    &::-webkit-scrollbar-thumb
      border-radius 4px
      background #d5b666
    &:hover::-webkit-scrollbar-thumb
      background #d5b666
    &.blur-html
      overflow hidden

  body
    position relative
    background #f1eee9
    overflow-x hidden
    width 100vw
    height 100%

  .menu-wrap
    width 100vw

  div, svg
    &:active, &:focus
      outline none

  .fade-enter-active, .fade-leave-active
    transition opacity .2s
    transition opacity .2s

  .fade-enter, .fade-leave-to
    opacity 0

  .show-call-enter-active, .show-call-leave-active
    transition all 1s ease

  .show-call-enter, .show-call-leave-to
    opacity 0
    pointer-events none

  .wrapper_blur
    filter blur(0.1px)
    transition filter .6s ease-in !important
  .is-call
    filter blur(5px)
    transition filter .6s ease-in !important
</style>
