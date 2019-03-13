<template lang="pug">
  .start
    h1
      span.letter(v-for="letter in incapsulSpan()") {{ letter }}
</template>

<script>
import {TimelineMax, Power0} from 'gsap'

export default {
  name: 'title-page',
  props: ['titleText'],
  data () {
    return {
      timeLine: null
    }
  },
  methods: {
    incapsulSpan () {
      let transform = this.titleText.split('')
      let arr = []

      for (let i = 0; i < transform.length; i++) {
        if (transform[i] === ' ') {
          arr[arr.length - 1] = arr[arr.length - 1] + ' '
        } else {
          arr.push(transform[i])
        }
      }
      return arr
    }
  },
  mounted () {
    this.timeLine = new TimelineMax()
    this.timeLine
      .addLabel('show-smooth')
      .staggerFromTo('.letter', 0.6, {marginLeft: '-100px', autoAlpha: 0}, {marginLeft: 0, autoAlpha: 1, ease: Power0.easeIn}, 0.07, 'show-smooth')
      .staggerFromTo('.letter', 0.9, {autoAlpha: 0}, {autoAlpha: 1, ease: Power0.easeIn}, 0.1, 'show-smooth')
  }

}
</script>

<style lang="stylus" scoped>
  .start
    overflow hidden
    width 100vw
    h1
      font italic 32px 'Futura', Arial, 'sans-serif'
      color #6f5c56
      text-transform uppercase
      font 32px 'Academic', Arial, sans-serif
      line-height 58px
      letter-spacing 10px
      left 5vw
      position relative
</style>
