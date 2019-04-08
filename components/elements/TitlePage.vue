<template lang="pug">
  .start
    h1
      span.letter(v-for="letter in incapsulSpan()") {{ letter }}
</template>

<script>
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
    this.timeLine = new this.$gsap.TimelineMax()
    this.timeLine
      .addLabel('show-smooth')
      // eslint-disable-next-line
      .staggerFromTo('.letter', 0.6, { marginLeft: '-100px', autoAlpha: 0 }, { marginLeft: 0, autoAlpha: 1, ease: Power0.easeIn }, 0.07, 'show-smooth')
      // eslint-disable-next-line
      .staggerFromTo('.letter', 0.9, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power0.easeIn }, 0.1, 'show-smooth')
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

  @media (max-width: 840px)
    .start h1
      font-size 26px
      padding-right 20px

  @media (max-width: 490px)
    .start h1
      font-size 22px
      line-height 38px
      letter-spacing 7px
</style>
