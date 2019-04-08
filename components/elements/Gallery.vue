<template lang="pug">
  .gallery-wrap
    .gallery-image
      .unique-photo(
        v-for="image in preview", :key="image.name",
        @click="showLightbox(folder, image, data[folder])",
      )
        img(
          name="unique-photo",
          :src='"~/assets/images/services/"+folder+"/gallery/thumbnails/"+image.name+".jpg"',
          :title="image.title",
          :alt="image.title"
        )
    transition(name="fade")
      .gallery-image.two(v-if="revealGallery.length")
        .unique-photo(
          v-for="image in revealGallery", :key="image.name",
          @click="showLightbox(folder, image, data[folder])",
        )
          img(
            name="unique-photo",
            :src='"~/assets/images/services/"+folder+"/gallery/thumbnails/"+image.name+".jpg"',
            :title="image.title",
            :alt="image.title"
          )
    .wrap-button
      transition(name="fog")
        .fog(v-if="revealGallery.length===0")
      .container-button
        .text(:class="{'active': underPreview.length}") Фотогалерея
        .show-button(@click="showGallery()", :class="{'active': underPreview.length}")
          .triangle
          .triangle
</template>

<script>
import GalleryData from '~/assets/json/gallery.json'

import ShowBlock from '@/components/mixins/ShowBlock'
import { eventEmitter } from '@/plugins/eventEmitter'

export default {
  props: ['folder'],
  mixins: [ShowBlock],
  data () {
    return {
      data: GalleryData,
      gallery: {
        folder: ''
      },
      root: 'services/',
      preview: null,
      underPreview: [],
      show: false,
      element: '.gallery-wrap'
    }
  },
  methods: {
    showLightbox (way, data, images) {
      this.gallery.folder = this.root + this.folder + '/gallery/'
      eventEmitter.$emit('openLightbox',
        Object.assign({}, this.gallery, { data, images })
      )
    },
    showGallery () {
      if (this.underPreview.length === 0) {
        this.underPreview = this.data[this.folder].slice(8)
      } else {
        this.underPreview = []
      }
    }
  },
  computed: {
    revealGallery () {
      return this.underPreview
    }
  },
  created () {
    this.preview = this.data[this.folder].slice(0, 8)
  }
}
</script>

<style lang="stylus" scoped>
  .gallery-wrap
    padding 2vw 5vw 0 5vw
    overflow hidden
  .gallery-image
    display flex
    width 100%
    height 100%
    flex-direction row
    flex-wrap wrap
    &.two
      height 100%
    .unique-photo
      display block
      width 25%
      height auto
      box-sizing border-box
      padding 0
      margin 0
      object-fit cover
      img
        border 1px solid #f1eee9
        max-width 40vw
        width 100%
        display flex
        &:hover
          cursor pointer
          border-color #242424
  .wrap-button
    width 100%
    display flex
    justify-content center
    align-items center
    position relative
    background #f1eee9
    bottom 0
  .fog
    width 100%
    height 300px
    position absolute
    top -300px
    left 1px
    right 0
    background rgba(241, 238, 233, 0.5)
    background linear-gradient(to bottom,  rgba(229,229,229,0) 0%,rgba(241,238,233,1) 100%)
    pointer-events none
  .container-button
    margin-top 50px
    display flex
    justify-content center
    align-items center
    flex-direction column
    .text
      color #6f5c56
      letter-spacing 3px
      text-transform uppercase
      font 14px Futura
      transition opacity 0.5s ease
      &.active
        opacity 0
        transition opacity 0.5s ease

  .show-button
    margin-top 10px
    height 60px
    width 60px
    display flex
    align-items center
    justify-content center
    flex-direction column
    transition transform .5s ease
    &.active
      transform rotate3d(1,0,0,180deg)
      transition transform .5s ease
    &:hover
      cursor pointer
      .triangle
        width 50%
        height 50%
        border-width 4px
        border-color transparent
        box-shadow -2px -2px 2px rgba(111, 92, 86,0.4)
    .triangle
      position relative
      transform rotate(225deg)
      border-top 3px solid transparent
      border-left 3px solid transparent
      box-shadow -2px -2px 1px rgba(111, 92, 86,0.4)
      width 48%
      height 48%
      top 0
      &:nth-child(2)
        top -10px

  .fade-enter-active, .fade-leave-active
    max-height 1000px
    transition all .5s ease

  .fade-enter, .fade-leave-to
      max-height 0

  .fog-enter-active, .fog-leave-active
    transition opacity .5s ease
    transition-delay .2s
  .fog-enter, .fog-leave-to
      opacity 0

  @media (max-width: 900px)
    .gallery-image
      .unique-photo
        width 50%
        img
          max-width 50vw
</style>
