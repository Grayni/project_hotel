<template lang="pug">
  div
    header-block(:class="{ 'is-call': blurStatus }", :scrollBar="htmlScrollStatus()")
      logo
      main-menu.menu-wrap

    progress-bar.br(v-if="this.widthWindow > 490")

    nuxt

    back-call

    transition(name="show-lightbox", key="show-lightbox")
      lightbox(
        #from-slider="",
        v-if="lightboxParam.state",
        :data-lightbox="lightboxParam",
        @changeSlide="lightboxParam.data = $event"
      )
        img.show-slide(
          :src='"~/assets/images/"+lightboxParam.folder+lightboxParam.data.name+".jpg"',
          :alt="lightboxParam.data.title",
          :title="lightboxParam.data.title"
        )
</template>

<script>
import MainMenu from '@/components/elements/MainMenu'
import Logo from '@/components/elements/Logo'
import HeaderBlock from '@/components/elements/HeaderBlock'
import BackCall from '@/components/elements/BackCall'
import ProgressBar from '@/components/apps/ProgressBar'
import Lightbox from '@/components/elements/Lightbox'

import blurStatus from '@/components/mixins/blurStatus'

import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  name: 'default',
  mixins: [blurStatus],
  components: {
    MainMenu, Logo, HeaderBlock, BackCall, ProgressBar, Lightbox
  },
  data () {
    return {
      lineScrollDisplay: '',
      lightboxParam: {
        state: false,
        images: null,
        folder: '1',
        data: null
      },
      widthWindow: 0,
      winScroll: 0
    }
  },
  methods: {
    htmlScrollStatus () {
      if (this.lineScrollDisplay) {
        this.lineScrollDisplay.style.overflow = (this.blurStatus) ? 'hidden' : 'visible'
      }
    },
    scrollDetect () {
      this.winScroll = document.body.scrollTop || document.documentElement.scrollTop
      eventEmitter.$emit('scrollable', this.winScroll)
    }
  },
  created () {
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
  },
  beforeMount () {
    document.onscroll = () => this.scrollDetect()
  },
  mounted () {
    this.lineScrollDisplay = document.querySelector('html')
    this.widthWindow = window.innerWidth
  }
}
</script>

<style lang="stylus">
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

  .wrapper_blur
    filter blur(0.1px)
    transition filter .6s ease-in

  .is-call
    filter blur(5px)
    transition filter .6s ease-in

  .show-lightbox
    &-enter-active, &-leave-active
      transition all 0.3s ease

    &-enter, &-leave-to
      opacity 0
      pointer-events none
</style>
