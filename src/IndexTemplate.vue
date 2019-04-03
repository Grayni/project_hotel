<template lang="pug">

  #IndexTemplate(:line-scroll="htmlScrollStatus()")
    header-block(:class="{'is-call': blurStatus}", :position="scrollStatus")
      logo(:position="scrollStatus")
      main-menu.menu-wrap

    progress-bar.br(id="progressBar", v-if="this.widthWindow > 490")

    transition(name="fade-page", mode="out-in")
      router-view(
        @scrollValue="getScroll($event)",
        :class="{'is-call': blurStatus}"
      )

    back-call

    transition(
      name="show-lightbox",
      key="show-lightbox"
    )
      lightbox(
        #from-slider="",
        v-if="lightboxParam.state",
        :data-lightbox="lightboxParam",
        @changeSlide="lightboxParam.data = $event")
        img.show-slide(
          :src="'/static/'+lightboxParam.folder+lightboxParam.data.name+'.jpg'",
          :alt="lightboxParam.data.title"
        )
</template>

<script>
import MainMenu from './components/elements/MainMenu'
import Logo from './components/elements/Logo'
import HeaderBlock from './components/elements/HeaderBlock'
import BackCall from './components/elements/BackCall'
import ProgressBar from './components/apps/ProgressBar'
import Lightbox from '@/components/elements/Lightbox'

import blurStatus from '@/components/mixins/blurStatus'

import { eventEmitter } from '@/main'

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
      lineScrollDisplay: '',
      lightboxParam: {
        state: false,
        images: null,
        folder: '1',
        data: null
      },
      widthWindow: window.innerWidth
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

    eventEmitter.$on('openLightbox', e => {
      this.lightboxParam = Object.assign({}, this.lightboxParam, e)
      if (this.lightboxParam.images) {
        this.lightboxParam.state = true
      }
    })

    eventEmitter.$on('closeLightbox', () => {
      this.lightboxParam.data = ''
      this.lightboxParam.images = null
      this.lightboxParam.state = false
    })

    eventEmitter.$on('resize', e => {
      this.widthWindow = e
    })
  }
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

  .fade-page-enter-active, .fade-page-leave-active
    opacity 1
    transition opacity .2s

  .fade-page-enter, .fade-page-leave-active
    opacity 0

  .wrapper_blur
    filter blur(0.1px)
    transition filter .6s ease-in
  .is-call
    filter blur(5px)
    transition filter .6s ease-in

  .show-lightbox-enter-active, .show-lightbox-leave-active
    transition all 0.3s ease

  .show-lightbox-enter, .show-lightbox-leave-to
    opacity 0
    pointer-events none
</style>
