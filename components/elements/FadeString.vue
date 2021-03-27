<template lang="pug">
  .about
    h2.title {{ title }}
    p(v-for="(words,i) in strings" :key='i')
      span.word-blur(v-for="word in words" :key="word") {{ word }}

</template>

<script>
export default {
  name: 'fade-string',
  props: ['title', 'strings', 'target', 'parent'],
  data () {
    return {
      timeLine1: null,
      tween: null,
      scene: null,
      arrTween: null
    }
  },
  methods: {
    sortArrWords () {
      let arrWords = document.querySelectorAll(this.parent + ' .word-blur')

      arrWords = Array.prototype.slice.call(arrWords)
      this.arrTween = new this.$gsap.TimelineMax()
      this.arrTween.set(arrWords, { scale: 0, autoAlpha: 0, opacity: 0, filter: 'blur(3px)' })

      return arrWords.sort(() => 0.5 - Math.random())
    },
    showWords () {
      this.timeLine1 = new this.$gsap.TimelineMax()

      this.tween = this.timeLine1
        .addLabel('show-block')
        .staggerTo(this.sortArrWords(), 1.4, { scale: 11, autoAlpha: 1, opacity: 1, filter: 'blur(0px)' }, 0.3, 'show-block')
        .fromTo(this.parent + ' .title', 1.4, { autoAlpha: 0, x: '-10vw' }, { autoAlpha: 0.5, x: 0 }, 'show-block')

      this.scene = new this.$scrollmagic.Scene({
        triggerElement: this.target
      }).setTween(this.tween)

      this.$ksvuescr.$emit('addScene', 'showWords', this.scene)
    }
  },
  mounted () {
    this.showWords()
  }
}
</script>

<style lang="stylus" scoped>
.about
  font 32px 'Academic', Arial, sans-serif
  line-height 58px
  letter-spacing 10px
  text-transform uppercase
  color #3e3937
  transform matrix(1, 0, 0, 1, 0, 0)
  margin-left 5vw
  padding 40px 0 80px 0
  p:first-child
    text-indent 26px

  .word-blur
    margin-right 25px
    transform scale(2)

  h2.title
    font italic 18px 'Futura', Arial, 'sans-serif'
    display inline-block
    color #6f5c56
    border-bottom 1px solid #6f5c56

@media (max-width: 1280px)
  .about
    padding-bottom 250px

@media (max-width: 868px)
  .about
    font-size 18px
    line-height 30px
    letter-spacing 6px

@media (max-width: 490px)
  body .about
    width 100%
    box-sizing border-box
    padding 40px 10px 250px 10px
    margin 0
    font-size 12px
    letter-spacing 3px
    .word-blur
      margin-right 10px

@media (orientation: portrait)
  .about
    padding-bottom 250px
</style>
